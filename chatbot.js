// Nivenza Chatu - AI Assistant
class NivenzaChatu {
  constructor() {
    this.isOpen = false;
    this.messages = [];
    this.initializeElements();
    this.bindEvents();
    this.addWelcomeMessage();
  }

  initializeElements() {
    this.toggleBtn = document.getElementById('chatbot-toggle');
    this.window = document.getElementById('chatbot-window');
    this.closeBtn = document.getElementById('chatbot-close');
    this.messagesContainer = document.getElementById('chatbot-messages');
    this.input = document.getElementById('chatbot-input');
    this.sendBtn = document.getElementById('chatbot-send');
  }

  bindEvents() {
    this.toggleBtn.addEventListener('click', () => this.toggle());
    this.closeBtn.addEventListener('click', () => this.close());
    this.sendBtn.addEventListener('click', () => this.sendMessage());
    this.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.window.classList.remove('hidden');
    this.isOpen = true;
    this.input.focus();
  }

  close() {
    this.window.classList.add('hidden');
    this.isOpen = false;
  }

  addWelcomeMessage() {
    const welcomeMessages = [
      "Welcome to Nivenza! I'm here to help you with our digital marketing and technology solutions.",
      "Hi! I can help you learn about our services, pricing, or connect you with our team.",
      "Hello! Ask me about our web development, digital marketing, or IT staffing services."
    ];
    // Welcome message is already in HTML
  }

  sendMessage() {
    const message = this.input.value.trim();
    if (!message) return;

    this.addMessage(message, 'user');
    this.input.value = '';

    // Simulate typing delay
    setTimeout(() => {
      const response = this.getResponse(message);
      this.addMessage(response, 'bot');
    }, 1000);
  }

  addMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex items-start space-x-2 ${sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`;

            if (sender === 'bot') {
          messageDiv.innerHTML = `
            <div class="w-6 h-6 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div class="bg-white border border-gray-200 rounded-lg p-3 max-w-xs shadow-sm">
              <p class="text-sm text-gray-800 font-medium">${message}</p>
            </div>
          `;
            } else {
          messageDiv.innerHTML = `
            <div class="bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg p-3 max-w-xs shadow-md">
              <p class="text-sm font-medium">${message}</p>
            </div>
          `;
        }

    this.messagesContainer.appendChild(messageDiv);
    this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
  }

  getResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Service-related responses
    if (message.includes('service') || message.includes('what do you do')) {
      return "We offer comprehensive digital marketing, web development, and IT staffing solutions. Our services include SEO, social media marketing, custom web development, and connecting you with top tech talent.";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return "Our pricing varies based on your specific needs. I'd recommend scheduling a free consultation with our team. You can contact us at info@nivenza.com or visit our Contact page for more details.";
    }
    
    if (message.includes('contact') || message.includes('get in touch')) {
      return "You can reach us through our Contact page, email us at info@nivenza.com, or call us directly. We're here to help with your digital transformation needs!";
    }
    
    if (message.includes('web development') || message.includes('website')) {
      return "We specialize in modern, responsive web development using the latest technologies. Our team creates custom websites, e-commerce platforms, and web applications tailored to your business needs.";
    }
    
    if (message.includes('digital marketing') || message.includes('seo') || message.includes('marketing')) {
      return "Our digital marketing services include SEO optimization, social media marketing, content marketing, PPC advertising, and email marketing campaigns to boost your online presence.";
    }
    
    if (message.includes('staffing') || message.includes('hire') || message.includes('developer')) {
      return "We provide IT staffing solutions to help you find the right tech talent. Whether you need developers, designers, or other IT professionals, we can connect you with qualified candidates.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm Nivenza Chatu, your AI assistant. I'm here to help you learn about our services and answer any questions you might have about Nivenza.";
    }
    
    if (message.includes('help') || message.includes('support')) {
      return "I'm here to help! You can ask me about our services, pricing, how to get started, or any other questions about Nivenza. What would you like to know?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! I'm happy to help. Is there anything else you'd like to know about our services?";
    }
    
    // Default response
    return "That's a great question! I'd be happy to connect you with our team for more detailed information. You can visit our Contact page or email us at info@nivenza.com. Is there anything specific about our services I can help you with?";
  }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', () => {
  new NivenzaChatu();
});
