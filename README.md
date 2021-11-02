# Kibo Commerce Vue Storefront 2 Layer0 Demo
> View the running Demo [Here](https://kibo-commerce-vuestorefront-layer0-demo-default.layer0.link/)

## Requirements:
- NodeJS v14 or later
- KiboCommerce Account
- Layer0 Account




## Create your Layer0 Account


> To deploy your site to Layer0, you must first sign up for an account. [Sign up here for free.](https://app.layer0.co/signup?sgId=0f24fde8-77ed-40d0-8bc8-cbed15853a5e)

---


## Build and Deploy Steps
* Clone the repo
    ```
    $ git clone https://github.com/KiboSoftware/vuestorefront-layer0-demo.git kibo-vuestorefront-layer0-demo
    $ cd kibo-vuestorefront-layer0-demo
    ```   
* Run `yarn` to install dependencies
    ```
    $ yarn
    ```
* Install the [layer0 cli](https://docs.layer0.co/guides/cli)
    ```
    $ yarn global add @layer0/cli
    ```
* Deploy to Layer0
    ```
    $ layer0 deploy
    ```
* Add the Kibo Environmental Variabls to your [Layer0 Environment](https://docs.layer0.co/guides/environments#section_environment_variables)
    | Key | Example | Description |
    ------|---------|-----------
    KIBO_ACCESS_TOKEN_URL | https://home.mozu.com/api/platform/applications/authtickets/oauth | Uri to the Kibo Auth Service
    KIBO_API_HOST | https://txxx-sxxx.sandbox.mozu.com | Uri to Your Store
    KIBO_CLIENT_ID | someaccount.sample_app.1.0.0.Release | id of your app to authenticate with
    KIBO_SHARED_SECRET | UUID | auth secrete.

    *more info on aps @ [kibo dev docs](https://docs.kibocommerce.com/116703/651396-application-asset-management#create-an-application-5)*
* Update clientId and sharedSecret with your respective Application Client ID and Shared secret found in your Kibo Commerce Developer Console.  Visit [Kibo documentation](https://apidocs.kibong-perf.com/?spec=graphql#auth) for more details on API authentication



For detailed explanation on how things work, check out the [documentation](https://docs.vuestorefront.io/v2/).

## Resources

- [Vue Storefront Documentation](https://docs.vuestorefront.io/v2/)
- [kibocommerce integration Documentation](https://docs.vuestorefront.io/kibocommerce)
- [Community Chat](https://discord.vuestorefront.io)

## Support

If you have any questions about this integration we will be happy to answer them on `kibocommerce` channel on [our Discord](discord.vuestorefront.io).

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
"# vuestorefront-layer0-demo-main" 
