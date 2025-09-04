# Hosting-Specific Solutions for Clean URLs

## Common Hosting Providers

### 1. **Netlify** (Static Site Hosting)
Create a `_redirects` file in your root directory:
```
/Contact /Contact.html 200
/Company /Company.html 200
/work /work.html 200
/getstart /getstart.html 200
/case-study /case-study.html 200
```

### 2. **Vercel** (Static Site Hosting)
Create a `vercel.json` file in your root directory:
```json
{
  "rewrites": [
    { "source": "/Contact", "destination": "/Contact.html" },
    { "source": "/Company", "destination": "/Company.html" },
    { "source": "/work", "destination": "/work.html" },
    { "source": "/getstart", "destination": "/getstart.html" },
    { "source": "/case-study", "destination": "/case-study.html" }
  ]
}
```

### 3. **GitHub Pages**
Create a `_config.yml` file in your root directory:
```yaml
include:
  - .htaccess
```

### 4. **Shared Hosting (cPanel, Bluehost, etc.)**
Use the `.htaccess` file provided.

### 5. **WordPress Hosting**
If you're using WordPress hosting, you may need to:
1. Check if mod_rewrite is enabled
2. Contact your hosting provider
3. Use a plugin for URL rewriting

## Troubleshooting Steps

### Step 1: Check File Upload
1. Ensure `.htaccess` is uploaded to the root directory (same level as index.html)
2. Check file permissions (should be 644)
3. Verify the file isn't corrupted

### Step 2: Test Server Support
Create a test file `test.php`:
```php
<?php
if (function_exists('apache_get_modules')) {
    $modules = apache_get_modules();
    if (in_array('mod_rewrite', $modules)) {
        echo "mod_rewrite is enabled";
    } else {
        echo "mod_rewrite is NOT enabled";
    }
} else {
    echo "Cannot check modules";
}
?>
```

### Step 3: Alternative Solutions

#### Option A: Use .htaccess-simple
1. Rename `.htaccess` to `.htaccess-backup`
2. Rename `.htaccess-simple` to `.htaccess`
3. Test the URLs

#### Option B: Revert to .html URLs
If clean URLs don't work, revert the internal links:
1. Change `href="Contact"` back to `href="Contact.html"`
2. Keep the server configuration for future use

#### Option C: Contact Hosting Support
Contact your hosting provider and ask:
1. "Is mod_rewrite enabled on my account?"
2. "Can you help me set up clean URLs?"
3. "What's the correct way to hide .html extensions?"

## Quick Fix: Revert Links (Temporary Solution)

If you need to get your site working immediately, I can revert all the internal links back to use .html extensions while keeping the server configuration files for future use.

Would you like me to:
1. Revert the links to use .html extensions (quick fix)
2. Help you troubleshoot the server configuration
3. Provide hosting-specific solutions

Let me know your hosting provider and I'll give you the exact solution!
