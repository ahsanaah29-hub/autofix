// Customer Approval Page Configuration
// Replace these values with your actual Supabase project details

const CUSTOMER_APPROVAL_CONFIG = {
    // Your Supabase project URL (from the error logs)
    supabaseUrl: 'https://gfylsjfljnwyomfouwvs.supabase.co',
    
    // Your Supabase anon/public key (you need to get this from your Supabase dashboard)
    supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdmeWxzamZsam53eW9tZm91d3ZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MDc5MTYsImV4cCI6MjA3Mjk4MzkxNn0.hMvLvCDVaFtq0rXToHGOJPSFe-QnJ6_S-MYsI0d5zOs',
    
    // Base URL where this HTML page is hosted
    baseUrl: 'https://autofix-approval.netlify.app',
    
    // Default labour charge (can be overridden by backend)
    defaultLabourCharge: 500,
    
    // Currency symbol
    currency: '₹'
};

// Export for use in the HTML page
if (typeof window !== 'undefined') {
    window.CUSTOMER_APPROVAL_CONFIG = CUSTOMER_APPROVAL_CONFIG;
}
