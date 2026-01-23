# 📧 Web3Forms Setup Guide - Auto-Reply Contact Form

**Complete implementation for sending automatic "Thank You" emails to customers**

---

## ✅ What I've Implemented

### **1. Updated Contact.html**
- ✅ Replaced Google Apps Script with Web3Forms
- ✅ Added auto-reply email configuration
- ✅ Added spam protection (captcha)
- ✅ Configured redirect to thank-you page

### **2. Created thank-you.html**
- ✅ Professional thank you page with animated checkmark
- ✅ "What happens next" section
- ✅ Links to explore more content
- ✅ Auto-redirect to homepage after 10 seconds

---

## 🚀 Setup Instructions (5 Minutes)

### **Step 1: Get Your Free Web3Forms Access Key**

1. **Go to:** https://web3forms.com/

2. **Enter your email address:**
   - Use your business email (e.g., `contact@pjntech.com`)
   - Or any email where you want to receive form submissions

3. **Click "Get Started Free"**

4. **Check your email inbox:**
   - You'll receive an email from Web3Forms
   - Subject: "Your Web3Forms Access Key"
   - Copy the **Access Key** (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

---

### **Step 2: Add Access Key to Contact.html**

1. **Open:** `E:\eduprajna website\pjn\Nivenza\Contact.html`

2. **Find this line** (around line 301):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```

3. **Replace** `YOUR_ACCESS_KEY_HERE` with your actual access key:
   ```html
   <input type="hidden" name="access_key" value="a1b2c3d4-e5f6-7890-abcd-ef1234567890">
   ```

4. **Save the file**

---

### **Step 3: Test Your Contact Form**

1. **Open your website** in a browser

2. **Go to the Contact page**

3. **Fill out the form** with test data:
   - First Name: Test
   - Last Name: User
   - Email: **your-personal-email@gmail.com** (use your real email to test)
   - Phone: 1234567890
   - Message: This is a test message

4. **Click "Send Enquiry →"**

5. **You should:**
   - Be redirected to `thank-you.html`
   - See the animated checkmark and success message
   - Receive TWO emails:
     - ✉️ **Email 1 (to you):** Form submission notification
     - ✉️ **Email 2 (to customer):** Auto-reply "Thank you" email

---

## 📧 What Emails Look Like

### **Email 1: Notification to You (Business Owner)**

```
From: Web3Forms <noreply@web3forms.com>
To: contact@pjntech.com
Subject: New Contact Form Submission - PJN Technologies

New form submission from PJN Technologies Website:

First Name: John
Last Name: Doe
Email: john.doe@example.com
Phone: +1 234 567 8900
Message: I'm interested in your digital marketing services...

---
Sent via Web3Forms
```

---

### **Email 2: Auto-Reply to Customer**

```
From: PJN Technologies Website <noreply@web3forms.com>
To: john.doe@example.com
Subject: Thank you for contacting PJN Technologies

Thank you for contacting PJN Technologies!

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

## 🎨 Customization Options

### **Option 1: Change Auto-Reply Email Content**

Edit the `autoresponse` hidden field in `Contact.html` (around line 308):

```html
<input type="hidden" name="autoresponse" value="YOUR CUSTOM MESSAGE HERE">
```

**Example:**
```html
<input type="hidden" name="autoresponse" value="Hi there!

Thanks for reaching out to PJN Technologies! 🎉

We've got your message and we're excited to help you. 
Our team will be in touch within 24 hours.

Meanwhile, check out our latest projects: https://pjntech.com/work.html

Cheers,
The PJN Team">
```

---

### **Option 2: Change Email Subject**

Edit the `subject` hidden field (around line 303):

```html
<input type="hidden" name="subject" value="🔔 New Inquiry from PJN Website">
```

---

### **Option 3: Change Redirect URL**

If you want to redirect to a different page after submission:

```html
<!-- Redirect to homepage instead -->
<input type="hidden" name="redirect" value="https://pjntech.com/index.html">

<!-- Or redirect to a specific page -->
<input type="hidden" name="redirect" value="https://pjntech.com/getstart.html">
```

---

### **Option 4: Disable Spam Protection (Not Recommended)**

If you don't want the captcha, remove this line (around line 353):

```html
<div class="h-captcha" data-captcha="true"></div>
```

---

## 🔧 Advanced Configuration

### **Add CC/BCC Recipients**

To send copies to multiple email addresses:

```html
<!-- CC: visible to everyone -->
<input type="hidden" name="cc" value="sales@pjntech.com,support@pjntech.com">

<!-- BCC: hidden from recipients -->
<input type="hidden" name="bcc" value="admin@pjntech.com">
```

---

### **Custom "From" Name**

Change how the sender appears:

```html
<input type="hidden" name="from_name" value="PJN Technologies Contact Form">
```

---

### **Add Custom Fields**

If you want to capture additional information:

```html
<!-- Add to form -->
<input type="text" name="company" placeholder="Company Name">
<select name="service_interest">
  <option value="web-development">Web Development</option>
  <option value="digital-marketing">Digital Marketing</option>
  <option value="seo">SEO Services</option>
</select>
```

These will automatically appear in your email notifications.

---

## 📊 Features Comparison

| Feature | Web3Forms (NEW) | Google Apps Script (OLD) |
|---------|-----------------|--------------------------|
| **Auto-Reply Emails** | ✅ Yes | ❌ No |
| **Submissions Limit** | ✅ Unlimited | ⚠️ Quota limits |
| **Setup Difficulty** | ⭐ Easy (5 min) | ⭐⭐⭐ Hard (30+ min) |
| **Spam Protection** | ✅ Built-in | ❌ Manual |
| **Email Notifications** | ✅ Yes | ✅ Yes |
| **Custom Redirect** | ✅ Yes | ⚠️ Manual |
| **Cost** | ✅ FREE forever | ✅ Free |
| **Maintenance** | ✅ None | ⚠️ Script updates |

---

## ✅ Testing Checklist

After setup, test these scenarios:

- [ ] Submit form with valid data
- [ ] Verify redirect to thank-you.html works
- [ ] Check you received notification email
- [ ] Check customer received auto-reply email
- [ ] Test with invalid email (should show error)
- [ ] Test spam protection (captcha)
- [ ] Test on mobile device
- [ ] Test on different browsers

---

## 🐛 Troubleshooting

### **Issue: Not receiving emails**

**Solution:**
1. Check spam/junk folder
2. Verify access key is correct
3. Make sure you used the email address you registered with Web3Forms
4. Wait 2-3 minutes (sometimes delayed)

---

### **Issue: Form not submitting**

**Solution:**
1. Check browser console for errors (F12)
2. Verify access key is added correctly
3. Make sure all required fields are filled
4. Disable browser extensions (ad blockers)

---

### **Issue: Customer not receiving auto-reply**

**Solution:**
1. Check the `autoresponse` field is present
2. Verify customer's email address is valid
3. Ask customer to check spam folder
4. Test with different email provider (Gmail, Outlook, etc.)

---

### **Issue: Redirect not working**

**Solution:**
1. Verify `thank-you.html` exists in the same directory
2. Check the redirect URL is correct
3. Use absolute URL: `https://pjntech.com/thank-you.html`
4. Clear browser cache

---

## 📞 Support

### **Web3Forms Documentation:**
https://docs.web3forms.com/

### **Web3Forms Support:**
support@web3forms.com

### **Features:**
- Email notifications: ✅ Included
- Auto-reply: ✅ Included
- Spam protection: ✅ Included
- File uploads: ✅ Available (upgrade)
- Webhooks: ✅ Available (upgrade)

---

## 🎯 Next Steps

1. **Get your access key** from https://web3forms.com/
2. **Add it to Contact.html** (replace `YOUR_ACCESS_KEY_HERE`)
3. **Test the form** with your email
4. **Verify both emails** are received
5. **Customize the auto-reply** message if needed
6. **Deploy to your website**

---

## 💡 Pro Tips

1. **Use a professional email:** Instead of `noreply@web3forms.com`, upgrade to use your own domain email (paid feature)

2. **Track submissions:** Web3Forms dashboard shows all submissions

3. **Export data:** Download all submissions as CSV

4. **Multiple forms:** Use different access keys for different forms (Contact, Get Started, etc.)

5. **Custom styling:** The thank-you page can be customized to match your brand

---

## ✨ What You Get

### **For You (Business Owner):**
- ✅ Email notification for every form submission
- ✅ All form data in one email
- ✅ Dashboard to view all submissions
- ✅ Export submissions as CSV

### **For Your Customers:**
- ✅ Instant confirmation email
- ✅ Professional auto-reply message
- ✅ Links to explore your website
- ✅ Clear next steps

### **For Your Website:**
- ✅ Professional user experience
- ✅ Spam protection
- ✅ Mobile-friendly
- ✅ No backend required

---

**That's it! Your contact form now sends automatic "thank you" emails! 🎉**

Questions? Let me know!
