# Contact Form Setup Guide

Your contact form has been updated and is ready to receive messages! Follow these steps to make it fully functional.

## ✅ What's Already Done

- ✅ Form structure updated with proper fields and validation
- ✅ JavaScript added for real-time validation and user feedback  
- ✅ Success/error message handling
- ✅ Loading states and form submission handling
- ✅ Professional styling that matches your portfolio

## 🚀 Setup Steps (Required)

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Sign up for a **free account** (allows 50 submissions/month)
3. Click "New Form" 
4. Enter a name like "Photography Portfolio Contact"
5. Copy your **Form ID** (looks like `xpzgkqyw`)

### Step 2: Update Your Form

1. Open `dist/contact.html` 
2. Find line 84: `action="https://formspree.io/f/YOUR_FORM_ID"`
3. Replace `YOUR_FORM_ID` with your actual Formspree Form ID
4. Save the file

**Example:**
```html
action="https://formspree.io/f/xpzgkqyw"
```

### Step 3: Add Contact Photo

1. Add a photo named `contact-photo.jpg` to your `src/images/` folder
2. This will appear on the right side of the contact form
3. Recommended size: Square aspect ratio (1:1), at least 500x500px

## 🎯 Features Included

### Form Validation
- **Email validation**: Checks for proper email format
- **Required fields**: All fields must be filled out
- **Real-time feedback**: Fields turn red if invalid
- **Visual indicators**: Clear success/error messages

### User Experience
- **Loading states**: Button shows "Sending..." during submission
- **Success feedback**: Green message when email is sent
- **Error handling**: Red message if something goes wrong
- **Form reset**: Clears form after successful submission
- **Smooth scrolling**: Auto-scrolls to messages

### Security Features
- **Spam protection**: Formspree includes built-in spam filtering
- **Form validation**: Client-side and server-side validation
- **No server required**: Works with static hosting

## 📧 Email Setup

Once set up, you'll receive emails at the address associated with your Formspree account containing:

- **Sender's email address**
- **Subject line**
- **Message content** 
- **Timestamp**
- **Form source identification**

## 🎨 Customization Options

### Change Email Subject Line
In `dist/contact.html`, find this line and customize:
```html
<input type="hidden" name="_subject" value="New Contact Form Submission from Photography Portfolio">
```

### Modify Success Message
Edit the success message in the HTML:
```html
<span class="font-medium">Success!</span> Your message has been sent successfully. I'll get back to you soon!
```

### Add More Fields
You can add additional fields like:
- Phone number
- Project type
- Budget range
- Preferred contact method

## 🔧 Testing

1. After setting up Formspree, test your form:
   - Fill out all fields with valid information
   - Click "Send message"
   - Check for success message
   - Verify email arrives in your inbox

2. Test validation:
   - Try submitting with empty fields
   - Enter invalid email format
   - Check that error styling appears

## 💡 Pro Tips

1. **Custom Thank You Page**: Formspree allows you to redirect to a custom thank you page
2. **Email Templates**: You can customize the email format in Formspree dashboard
3. **Analytics**: Formspree provides submission analytics
4. **Integrations**: Connect to tools like Slack, Zapier, or Google Sheets

## 🆘 Troubleshooting

**Form not working?**
- Check that you replaced `YOUR_FORM_ID` with actual Formspree ID
- Ensure you're testing on a web server (not opening HTML directly)
- Check browser console for JavaScript errors

**Emails not arriving?**
- Check spam/junk folder
- Verify Formspree account email address
- Check Formspree dashboard for submissions

**Styling issues?**
- Ensure Tailwind CSS is loading properly
- Check for JavaScript console errors

## 📞 Support

- **Formspree Documentation**: [https://help.formspree.io](https://help.formspree.io)
- **Formspree Support**: Available through their dashboard

---

**Next Steps:** Once you complete the Formspree setup, your contact form will be fully functional and ready to receive inquiries about your photography services!
