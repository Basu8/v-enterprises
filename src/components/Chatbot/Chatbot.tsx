"use client";
import React, { useState, useRef, useEffect } from 'react';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { productGroups } from '../data/products';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

// Get all products from your existing data
const allProducts = productGroups.flatMap(group => 
  group.items.map(item => ({
    id: item.id,
    name: item.name,
    category: group.title
  }))
);

// Get unique categories
const productCategories = [...new Set(productGroups.map(group => group.title))];

// Validation functions
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone) && phone.replace(/[\s\-\(\)]/g, '').length >= 10;
};

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-message',
      text: "Hello! I'm here to help you place bulk orders for industrial equipment. Would you like to start a bulk order inquiry?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isOrderInProgress, setIsOrderInProgress] = useState(false);
  const [currentStep, setCurrentStep] = useState<'initial' | 'name' | 'email' | 'company' | 'phone' | 'category' | 'product' | 'quantity' | 'message' | 'confirmation'>('initial');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    quantity: "",
    message: "",
  });
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [messageCounter, setMessageCounter] = useState(0);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Quick reply suggestions - MOVED INSIDE THE COMPONENT
  const quickReplies = [
    "Start Order",
    "View Categories",
    "Contact Info"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Improved unique ID generation
  const generateMessageId = () => {
    setMessageCounter(prev => prev + 1);
    return `msg-${Date.now()}-${messageCounter}-${Math.random().toString(36).substr(2, 5)}`;
  };

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: generateMessageId(),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleStartOrder = () => {
    setIsOrderInProgress(true);
    setCurrentStep('name');
    addMessage("Great! Let's start with your bulk order inquiry. What's your full name?", 'bot');
  };

  const handleUserInput = async () => {
    if (!inputMessage.trim()) return;

    addMessage(inputMessage, 'user');
    const userInput = inputMessage.trim();
    setInputMessage('');

    await processUserInput(userInput);
  };

  const processUserInput = async (userInput: string) => {
    switch (currentStep) {
      case 'initial':
        if (userInput.toLowerCase().includes('yes') || userInput.toLowerCase().includes('order') || userInput.toLowerCase().includes('inquiry')) {
          handleStartOrder();
        } else {
          addMessage("I can help you with bulk orders for industrial equipment. Type 'yes' to start an inquiry or ask about our products.", 'bot');
        }
        break;

      case 'name':
        if (userInput.trim().length < 2) {
          addMessage("Please enter a valid name (at least 2 characters).", 'bot');
          return;
        }
        setFormData(prev => ({ ...prev, name: userInput }));
        setCurrentStep('email');
        addMessage(`Thanks, ${userInput}! What's your email address?`, 'bot');
        break;

      case 'email':
        if (!isValidEmail(userInput)) {
          addMessage("Please enter a valid email address with domain (e.g., example@domain.com).", 'bot');
          return;
        }
        setFormData(prev => ({ ...prev, email: userInput }));
        setCurrentStep('company');
        addMessage("What company are you representing?", 'bot');
        break;

      case 'company':
        if (userInput.trim().length < 2) {
          addMessage("Please enter a valid company name.", 'bot');
          return;
        }
        setFormData(prev => ({ ...prev, company: userInput }));
        setCurrentStep('phone');
        addMessage("What's your phone number? (Include country code if international)", 'bot');
        break;

      case 'phone':
        if (!isValidPhone(userInput)) {
          addMessage("Please enter a valid phone number (minimum 10 digits, country code allowed). Examples: +91 8308306420 or 8308306420", 'bot');
          return;
        }
        setFormData(prev => ({ ...prev, phone: userInput }));
        setCurrentStep('category');
        showCategoryOptions();
        break;

      case 'category':
        const selectedCat = productCategories.find(cat => 
          cat.toLowerCase().includes(userInput.toLowerCase()) || 
          userInput.toLowerCase().includes(cat.toLowerCase())
        );
        
        if (selectedCat) {
          setSelectedCategory(selectedCat);
          setCurrentStep('product');
          showProductOptions(selectedCat);
        } else {
          addMessage("Please select a valid category from the options above.", 'bot');
        }
        break;

      case 'product':
        const filteredProducts = selectedCategory 
          ? allProducts.filter(product => product.category === selectedCategory)
          : allProducts;
        
        const selectedProduct = filteredProducts.find(prod => 
          prod.name.toLowerCase().includes(userInput.toLowerCase()) || 
          userInput.toLowerCase().includes(prod.name.toLowerCase())
        );

        if (selectedProduct) {
          setFormData(prev => ({ ...prev, product: selectedProduct.name }));
          setCurrentStep('quantity');
          addMessage(`Great choice! How many units of "${selectedProduct.name}" would you like to order? (e.g., 500 units, 100 pieces)`, 'bot');
        } else {
          addMessage("Please select a valid product from the options above.", 'bot');
        }
        break;

      case 'quantity':
        // Basic quantity validation - should be a number greater than 0
        const quantityNum = parseInt(userInput.replace(/[^0-9]/g, ''));
        if (isNaN(quantityNum) || quantityNum <= 0) {
          addMessage("Please enter a valid quantity (e.g., 500 units, 100 pieces).", 'bot');
          return;
        }
        setFormData(prev => ({ ...prev, quantity: userInput }));
        setCurrentStep('message');
        addMessage("Any additional details, specifications, or special requirements for your order?", 'bot');
        break;

      case 'message':
        setFormData(prev => ({ ...prev, message: userInput }));
        await submitOrderToFirebase();
        break;

      default:
        addMessage("I'm not sure how to process that. Let's start over. Would you like to place a bulk order?", 'bot');
        resetOrder();
        break;
    }
  };

  const showCategoryOptions = () => {
    let categoryMessage = "Please select a product category:\n\n";
    productCategories.forEach((category, index) => {
      categoryMessage += `${index + 1}. ${category}\n`;
    });
    categoryMessage += "\nPlease type the category name or number.";
    addMessage(categoryMessage, 'bot');
  };

  const showProductOptions = (category: string) => {
    const filteredProducts = allProducts.filter(product => product.category === category);
    let productMessage = `Products in ${category}:\n\n`;
    filteredProducts.forEach((product, index) => {
      productMessage += `${index + 1}. ${product.name}\n`;
    });
    productMessage += "\nPlease type the product name or number.";
    addMessage(productMessage, 'bot');
  };

  const submitOrderToFirebase = async () => {
    setLoading(true);
    
    try {
      // Validate all required fields
      if (!formData.name || !formData.email || !formData.company || !formData.phone || !formData.product) {
        addMessage("Please provide all required information. Let's start over.", 'bot');
        resetOrder();
        return;
      }

      // Double-check validations before submitting
      if (!isValidEmail(formData.email)) {
        addMessage("Invalid email format. Let's start over.", 'bot');
        resetOrder();
        return;
      }

      if (!isValidPhone(formData.phone)) {
        addMessage("Invalid phone number format. Let's start over.", 'bot');
        resetOrder();
        return;
      }

      // Save to Firestore - same collection as contact form
      await addDoc(collection(db, "bulkOrders"), {
        ...formData,
        status: "new",
        source: "chatbot", // Differentiate from contact form submissions
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      });

      // Success message
      const successMessage = `🎉 Bulk order inquiry submitted successfully!\n\n**Order Summary:**\n- Name: ${formData.name}\n- Company: ${formData.company}\n- Product: ${formData.product}\n- Quantity: ${formData.quantity || 'Not specified'}\n\nOur sales team will contact you within 24 hours at ${formData.email} or ${formData.phone}.`;
      
      addMessage(successMessage, 'bot');
      
      // Add file upload instructions (same as contact form)
      addMessage("💡 Need to share files? Please email your RFQ, technical drawings, or product list directly to v.enterprises994@gmail.com", 'bot');
      
      resetOrder();
      
    } catch (error) {
      console.error("Error submitting order:", error);
      addMessage("Sorry, there was an error submitting your inquiry. Please try again or use our contact form.", 'bot');
      resetOrder();
    } finally {
      setLoading(false);
    }
  };

  const resetOrder = () => {
    setIsOrderInProgress(false);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      product: "",
      quantity: "",
      message: "",
    });
    setSelectedCategory("");
    setCurrentStep('initial');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserInput();
    }
  };

  // Fix the handleQuickReply function to prevent rapid duplicate calls
  const handleQuickReply = (reply: string) => {
    if (loading) return; // Prevent during loading
    
    setInputMessage(reply);
    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      setTimeout(() => {
        handleUserInput();
      }, 100);
    });
  };

  // Render messages with proper keys
  const renderMessages = () => {
    return messages.map((message) => (
      <div
        key={message.id}
        className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
      >
        <div
          className={`inline-block max-w-[80%] p-3 rounded-lg ${
            message.sender === 'user'
              ? 'bg-blue-500 text-white rounded-br-none'
              : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
          }`}
        >
          {message.text.split('\n').map((line, i) => (
            <p key={`${message.id}-line-${i}`} className="whitespace-pre-wrap">
              {line}
            </p>
          ))}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    ));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-4 rounded-t-lg flex justify-between items-center">
        <div>
          <h3 className="font-semibold">Order Assistant</h3>
          <p className="text-sm text-blue-100">V Enterprises Industrial Tools</p>
        </div>
        <button
          onClick={onClose}
          className="text-white hover:text-blue-200 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
        {renderMessages()}
        {loading && (
          <div className="text-left mb-4">
            <div className="inline-block max-w-[80%] p-3 rounded-lg bg-white border border-gray-200 rounded-bl-none">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                Submitting your inquiry...
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      {!isOrderInProgress && currentStep === 'initial' && (
        <div className="px-4 pb-2">
          <div className="flex flex-wrap gap-2">
            {quickReplies.map((reply, index) => (
              <button
                key={`quick-reply-${index}`}
                onClick={() => handleQuickReply(reply)}
                disabled={loading}
                className="px-3 py-2 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors disabled:opacity-50"
              >
                {reply}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900 placeholder-gray-400"
            disabled={loading}
          />
          <button
            onClick={handleUserInput}
            disabled={loading || !inputMessage.trim()}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:from-blue-600 hover:to-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
        
        {/* Order Progress Indicator */}
        {isOrderInProgress && (
          <div className="mt-2">
            <div className="text-xs text-gray-500 mb-1">
              Step {['name', 'email', 'company', 'phone', 'category', 'product', 'quantity', 'message'].indexOf(currentStep) + 1} of 8
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1">
              <div 
                className="bg-blue-500 h-1 rounded-full transition-all duration-300"
                style={{ 
                  width: `${((['name', 'email', 'company', 'phone', 'category', 'product', 'quantity', 'message'].indexOf(currentStep) + 1) / 8) * 100}%` 
                }}
              ></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chatbot;