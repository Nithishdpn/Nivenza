# 📧 Static Website Contact Form Solutions

**Send Automated "Thank You" Emails Without Backend**

---

## 🎯 Best Solutions for Static Websites

### **Option 1: Formspree (Recommended - Easiest)** ⭐

**Pros:**
- ✅ No backend required
- ✅ Free tier: 50 submissions/month
- ✅ Automatic email notifications
- ✅ Custom "Thank You" page redirect
- ✅ Spam protection included
- ✅ Can send auto-reply emails

**Cons:**
- ❌ Limited to 50 submissions/month (free)
- ❌ Paid plan needed for more ($10/month)

**Setup Time:** 5 minutes

---

### **Option 2: Web3Forms (Best Free Option)** ⭐⭐⭐

**Pros:**
- ✅ Completely FREE forever
- ✅ Unlimited submissions
- ✅ No backend required
- ✅ Email notifications to you
- ✅ Auto-reply to customer
- ✅ Spam protection (reCAPTCHA)
- ✅ Custom redirect after submission

**Cons:**
- ❌ Requires API key (free to get)

**Setup Time:** 5 minutes

---

### **Option 3: EmailJS** ⭐⭐

**Pros:**
- ✅ Send emails directly from JavaScript
- ✅ Free tier: 200 emails/month
- ✅ Custom email templates
- ✅ Auto-reply functionality
- ✅ No backend required

**Cons:**
- ❌ Requires JavaScript setup
- ❌ Email credentials visible in code (use EmailJS service)

**Setup Time:** 10 minutes

---

### **Option 4: Google Forms + Apps Script** ⭐

**Pros:**
- ✅ Completely free
- ✅ Unlimited submissions
- ✅ Can send auto-reply emails
- ✅ Data stored in Google Sheets

**Cons:**
- ❌ Looks like Google Forms (not custom design)
- ❌ Requires Google Apps Script setup

**Setup Time:** 15 minutes

---

## 🚀 Implementation Guide

### **Solution 1: Web3Forms (RECOMMENDED)**

This is the best option for your needs - free, unlimited, and sends auto-reply emails.

#### **Step 1: Get Your Access Key**

1. Go to: https://web3forms.com/
2. Click "Get Started Free"
3. Enter your email: `your-email@pjntech.com`
4. You'll receive an **Access Key** via email

#### **Step 2: Update Your Contact Form**

Here's the complete implementation:

```html
<!-- Contact Form with Web3Forms -->
<form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
  
  <!-- Your Web3Forms Access Key -->
  <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
  
  <!-- Auto-reply Configuration -->
  <input type="hidden" name="subject" value="New Contact Form Submission from PJN Technologies">
  <input type="hidden" name="from_name" value="PJN Technologies">
  
  <!-- Enable Auto-Reply -->
  <input type="hidden" name="autoresponse" value="Thank you for contacting PJN Technologies! We have received your message and will get back to you within 24 hours. Our team is excited to discuss your project.">
  
  <!-- Redirect after submission -->
  <input type="hidden" name="redirect" value="https://pjntech.com/thank-you.html">
  
  <!-- Form Fields -->
  <div class="form-group">
    <label for="name">Name *</label>
    <input type="text" id="name" name="name" required 
           placeholder="Your Name" class="form-control">
  </div>
  
  <div class="form-group">
    <label for="email">Email *</label>
    <input type="email" id="email" name="email" required 
           placeholder="your@email.com" class="form-control">
  </div>
  
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone" 
           placeholder="+1 234 567 8900" class="form-control">
  </div>
  
  <div class="form-group">
    <label for="message">Message *</label>
    <textarea id="message" name="message" required rows="5" 
              placeholder="Tell us about your project..." class="form-control"></textarea>
  </div>
  
  <!-- Spam Protection (reCAPTCHA) -->
  <div class="h-captcha" data-captcha="true"></div>
  
  <button type="submit" class="submit-btn">Send Message</button>
</form>

<!-- Add reCAPTCHA Script -->
<script src="https://web3forms.com/client/script.js" async defer></script>
```

#### **Step 3: Create Thank You Page**

Create `thank-you.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank You - PJN Technologies</title>
  <link rel="icon" type="image/png" href="assets/logo4.png">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-black text-white min-h-screen flex items-center justify-center">
  <div class="text-center max-w-2xl mx-auto px-4">
    <!-- Success Icon -->
    <div class="mb-8">
      <svg class="w-24 h-24 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    
    <!-- Thank You Message -->
    <h1 class="text-4xl md:text-5xl font-bold mb-4">Thank You!</h1>
    <p class="text-xl text-gray-300 mb-6">
      We've received your message and will get back to you within 24 hours.
    </p>
    <p class="text-gray-400 mb-8">
      A confirmation email has been sent to your inbox.
    </p>
    
    <!-- Call to Action -->
    <div class="space-x-4">
      <a href="index.html" class="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
        Back to Home
      </a>
      <a href="work.html" class="inline-block bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-colors">
        View Our Work
      </a>
    </div>
    
    <!-- Auto-redirect after 5 seconds -->
    <p class="text-gray-500 text-sm mt-8">
      Redirecting to homepage in <span id="countdown">5</span> seconds...
    </p>
  </div>
  
  <script>
    // Auto-redirect countdown
    let seconds = 5;
    const countdownEl = document.getElementById('countdown');
    
    const interval = setInterval(() => {
      seconds--;
      countdownEl.textContent = seconds;
      
      if (seconds <= 0) {
        clearInterval(interval);
        window.location.href = 'index.html';
      }
    }, 1000);
  </script>
</body>
</html>
```

---

### **Solution 2: EmailJS (More Customizable)**

If you want more control over email templates:

#### **Step 1: Setup EmailJS Account**

1. Go to: https://www.emailjs.com/
2. Sign up for free account
3. Add email service (Gmail, Outlook, etc.)
4. Create email template
5. Get your credentials:
   - Service ID
   - Template ID
   - Public Key

#### **Step 2: Add EmailJS to Your Form**

```html
<!-- Add EmailJS SDK -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

<script>
  // Initialize EmailJS
  (function() {
    emailjs.init("YOUR_PUBLIC_KEY");
  })();
  
  // Handle form submission
  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Send email
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function() {
        // Success - send auto-reply
        emailjs.send('YOUR_SERVICE_ID', 'YOUR_AUTOREPLY_TEMPLATE_ID', {
          to_email: document.getElementById('email').value,
          to_name: document.getElementById('name').value
        });
        
        // Show success message
        alert('Thank you! We will contact you soon.');
        
        // Redirect to thank you page
        window.location.href = 'thank-you.html';
        
      }, function(error) {
        // Error
        alert('Oops! Something went wrong. Please try again.');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
  });
</script>
```

#### **Step 3: Create Email Templates in EmailJS**

**Template 1: Notification to You**
```
Subject: New Contact Form Submission

Name: {{name}}
Email: {{email}}
Phone: {{phone}}
Message: {{message}}
```

**Template 2: Auto-Reply to Customer**
```
Subject: Thank you for contacting PJN Technologies

Hi {{to_name}},

Thank you for reaching out to PJN Technologies!

We have received your message and our team will review it shortly. 
You can expect a response within 24 hours.

In the meantime, feel free to explore our portfolio: https://pjntech.com/work.html

Best regards,
PJN Technologies Team
https://pjntech.com
```

---

### **Solution 3: Formspree (Simplest)**

#### **Step 1: Setup**

1. Go to: https://formspree.io/
2. Sign up for free
3. Create a new form
4. Get your form endpoint

#### **Step 2: Update Form**

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required placeholder="Your Name">
  <input type="email" name="_replyto" required placeholder="Your Email">
  <textarea name="message" required placeholder="Your Message"></textarea>
  
  <!-- Auto-reply configuration -->
  <input type="hidden" name="_subject" value="New Contact from PJN Technologies">
  <input type="hidden" name="_autoresponse" value="Thank you for contacting us! We'll get back to you soon.">
  
  <!-- Redirect after submission -->
  <input type="hidden" name="_next" value="https://pjntech.com/thank-you.html">
  
  <button type="submit">Send</button>
</form>
```

---

## 📊 Comparison Table

| Feature | Web3Forms | EmailJS | Formspree | Google Forms |
|---------|-----------|---------|-----------|--------------|
| **Price** | Free | Free (200/mo) | Free (50/mo) | Free |
| **Submissions** | Unlimited | 200/month | 50/month | Unlimited |
| **Auto-Reply** | ✅ Yes | ✅ Yes | ✅ Yes (paid) | ✅ Yes |
| **Custom Design** | ✅ Yes | ✅ Yes | ✅ Yes | ❌ No |
| **Spam Protection** | ✅ Yes | ✅ Yes | ✅ Yes | ✅ Yes |
| **Setup Difficulty** | ⭐ Easy | ⭐⭐ Medium | ⭐ Easy | ⭐⭐⭐ Hard |
| **Email Templates** | Basic | ✅ Advanced | Basic | ✅ Advanced |

---

## 🎯 My Recommendation

**Use Web3Forms** because:

1. ✅ **Completely FREE** with unlimited submissions
2. ✅ **Auto-reply emails** to customers
3. ✅ **Email notifications** to you
4. ✅ **Spam protection** built-in
5. ✅ **Custom redirect** to thank you page
6. ✅ **5-minute setup** - super easy

---

## 📝 Implementation Checklist

### **For Web3Forms:**

- [ ] Sign up at https://web3forms.com/
- [ ] Get your Access Key from email
- [ ] Update Contact.html form with Web3Forms code
- [ ] Create thank-you.html page
- [ ] Test the form with your email
- [ ] Verify auto-reply email is received
- [ ] Update getstart.html form (if needed)

### **Email Content Suggestions:**

**Auto-Reply Email:**
```
Subject: Thank you for contacting PJN Technologies

Hi [Name],

Thank you for reaching out to PJN Technologies!

We have received your message and our team will review it shortly. 
You can expect a response within 24 hours during business hours.

What happens next?
1. Our team reviews your inquiry
2. We'll respond with next steps or schedule a call
3. We'll discuss your project requirements in detail

In the meantime, feel free to:
- View our portfolio: https://pjntech.com/work.html
- Read our case studies: https://pjntech.com/case-study.html
- Learn more about us: https://pjntech.com/Company.html

Best regards,
PJN Technologies Team

📧 Email: contact@pjntech.com
🌐 Website: https://pjntech.com
💼 LinkedIn: https://www.linkedin.com/company/pjntech
```

---

## 🔧 Advanced: Custom Success Message (No Redirect)

If you prefer to show a success message without redirecting:

```html
<form id="contactForm">
  <!-- Form fields here -->
  <button type="submit" id="submitBtn">Send Message</button>
  
  <!-- Success Message (hidden by default) -->
  <div id="successMessage" style="display: none;" class="success-alert">
    <h3>✅ Message Sent Successfully!</h3>
    <p>Thank you for contacting us. We'll get back to you within 24 hours.</p>
    <p>A confirmation email has been sent to your inbox.</p>
  </div>
</form>

<script>
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const successMsg = document.getElementById('successMessage');
    
    // Show loading
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Submit to Web3Forms
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        // Success
        form.style.display = 'none';
        successMsg.style.display = 'block';
        
        // Reset form after 3 seconds
        setTimeout(() => {
          form.reset();
          form.style.display = 'block';
          successMsg.style.display = 'none';
          submitBtn.textContent = 'Send Message';
          submitBtn.disabled = false;
        }, 5000);
      }
    } catch (error) {
      alert('Error sending message. Please try again.');
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
</script>
```

---

## 📞 Need Help?

If you need help implementing any of these solutions, let me know which option you prefer and I'll update your Contact.html and getstart.html files with the complete implementation!

**Recommended:** Web3Forms (free, unlimited, auto-reply included)
