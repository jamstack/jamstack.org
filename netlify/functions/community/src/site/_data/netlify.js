const PROD_URL = "https://www.jamstack.org";

module.exports = {
  /*
  See also Netlify ENV variables:
    process.env.CONTEXT === "production" ||
    process.env.CONTEXT === "deploy-preview" ||
    process.env.CONTEXT === "branch-deploy"

  via https://docs.netlify.com/configure-builds/environment-variables/

   */
  deployUrl: process.env.CONTEXT === "production" ? PROD_URL : process.env.DEPLOY_PRIME_URL
};
