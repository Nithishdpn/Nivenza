# Vercel Deployment Guide for Clean URLs

## Your Setup
- **Domain**: Hostinger (custom domain)
- **Hosting**: Vercel
- **Configuration**: vercel.json

## Files Created
- ✅ `vercel.json` - Vercel configuration for clean URLs
- ✅ Updated internal links to use clean URLs

## Deployment Steps

### 1. Upload Files to Vercel
1. Upload all your files to Vercel (including `vercel.json`)
2. Make sure `vercel.json` is in the root directory
3. Deploy your site

### 2. Test Clean URLs
After deployment, test these URLs:
- `yourdomain.com/Contact` ✅ (should load Contact.html)
- `yourdomain.com/Company` ✅ (should load Company.html)
- `yourdomain.com/work` ✅ (should load work.html)
- `yourdomain.com/getstart` ✅ (should load getstart.html)
- `yourdomain.com/case-study` ✅ (should load case-study.html)

### 3. Test Redirects
Old URLs should redirect to clean URLs:
- `yourdomain.com/Contact.html` → `yourdomain.com/Contact` (301 redirect)
- `yourdomain.com/Company.html` → `yourdomain.com/Company` (301 redirect)

## How It Works

### Rewrites (Clean URLs)
```json
"rewrites": [
  { "source": "/Contact", "destination": "/Contact.html" }
]
```
- When someone visits `/Contact`, Vercel serves `/Contact.html`
- URL stays clean in browser

### Redirects (SEO)
```json
"redirects": [
  { "source": "/Contact.html", "destination": "/Contact", "permanent": true }
]
```
- When someone visits `/Contact.html`, they get redirected to `/Contact`
- 301 permanent redirect for SEO

## Benefits
- ✅ **Clean URLs**: Professional appearance
- ✅ **SEO Friendly**: Search engines prefer clean URLs
- ✅ **Backward Compatibility**: Old URLs still work (with redirects)
- ✅ **Fast**: Vercel's edge network handles rewrites efficiently

## Troubleshooting

### If Clean URLs Don't Work:
1. **Check vercel.json**: Ensure it's in the root directory
2. **Redeploy**: Push changes to trigger new deployment
3. **Check Vercel Dashboard**: Look for any deployment errors
4. **Test Locally**: Use `vercel dev` to test locally

### If Redirects Don't Work:
1. **Clear Browser Cache**: Old redirects might be cached
2. **Test in Incognito**: Avoid cached redirects
3. **Check Vercel Logs**: Look for any errors in deployment logs

## Vercel CLI Commands
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to Vercel
vercel

# Test locally
vercel dev
```

## Custom Domain Setup
Since you're using Hostinger domain with Vercel:
1. **DNS Settings**: Point your domain to Vercel
2. **Vercel Dashboard**: Add your custom domain
3. **SSL Certificate**: Vercel automatically provides SSL

Your clean URLs will work with your custom domain once deployed!
