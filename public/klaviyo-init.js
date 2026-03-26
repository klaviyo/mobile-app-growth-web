/**
 * Klaviyo.js initialization module for MAGE web test site
 * Handles reading company ID and environment from URL params/session storage
 * and loading the appropriate klaviyo.js script
 */

(function() {
  // Key for storing company_id in session storage (same as iaf-tester.html)
  const COMPANY_ID_KEY = 'company_id';

  /**
   * Get company ID from URL params or session storage
   */
  function getCompanyId() {
    const params = new URLSearchParams(window.location.search);
    const companyIdFromUrl = params.get('company_id');

    if (companyIdFromUrl) {
      sessionStorage.setItem(COMPANY_ID_KEY, companyIdFromUrl);
      return companyIdFromUrl;
    }

    return sessionStorage.getItem(COMPANY_ID_KEY) || localStorage.getItem(COMPANY_ID_KEY) || '';
  }

  /**
   * Get form environment from URL params or session storage
   * Defaults to 'web' for web form testing
   */
  function getEnvironment() {
    const params = new URLSearchParams(window.location.search);
    const envFromUrl = params.get('env');

    if (envFromUrl && (envFromUrl === 'web' || envFromUrl === 'in-app')) {
      sessionStorage.setItem('form_env', envFromUrl);
      return envFromUrl;
    }

    return sessionStorage.getItem('form_env') || 'web';
  }

  /**
   * Load klaviyo.js with appropriate parameters
   */
  function initializeKlaviyo() {
    const companyId = getCompanyId();

    if (!companyId) {
      // No company ID provided, skip loading
      return;
    }

    const env = getEnvironment();
    const scriptUrl = `https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${encodeURIComponent(companyId)}&env=${env}`;

    const script = document.createElement('script');
    script.id = 'klaviyo-init';
    script.src = scriptUrl;
    script.async = true;
    document.head.appendChild(script);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeKlaviyo);
  } else {
    initializeKlaviyo();
  }

  // Expose helper functions globally for debugging/manual control
  window.KlaviyoTestHelpers = {
    getCompanyId,
    getEnvironment,
    setCompanyId: (id) => sessionStorage.setItem(COMPANY_ID_KEY, id),
    setEnvironment: (env) => sessionStorage.setItem('form_env', env),
    reload: () => window.location.reload()
  };
})();
