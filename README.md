# [![LS-BrandDev-Haven_logo-full-on_light](https://user-images.githubusercontent.com/24786076/103423723-731d1d00-4b65-11eb-82a1-ef01c4840ed6.png)][github]

[![shields.io github closed pull requests badge](https://img.shields.io/github/issues-pr-closed/haven-secrets/haven-ui)][pull-requests]
[![shields.io custom website link badge](https://img.shields.io/static/v1?label=website&message=haven-secrets.github.io&color=blue)][website]

Haven is an open-source, centralized secrets manager. It protects your application secrets through a combination of encryption, access control, and injection-at-runtime. It’s easy to set up, and offers an intuitive GUI to set fine-grained access controls and to view logs. Haven allows small teams to securely manage all of their projects’ secrets---and to do so with a minimum of hassle so that they can get back to developing their applications without sacrificing security.

This package allows you to use a GUI to interact with your Haven instance. If you would prefer a CLI, use the [Haven CLI][haven-cli] package instead. Both of these use the [Haven][haven-core] package under the hood to interact with the AWS architecture that makes up Haven.

## Usage as Admin

To use, you must first have an AWS account set up, your default credentials setup in `~/.aws/credentials` and your region setup in `~/.aws/config`.

Example `~/.aws/credentials`:

```
[default]
aws_access_key_id=AKIAIOSFODNN7EXAMPLE
aws_secret_access_key=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
```

Example `~/.aws/config`:

```
[default]
region=us-west-2
output=json
```

After that, simply:

1. Clone this repository
2. Inside the root directory, run `npm run haven-setup ${region}` specifying what supported region you want your Haven instance to be setup.
3. When setup completes, run `npm install` within the root directory and the `client` directory.
4. In root directory, run `npm start` to start up the GUI.
5. To teardown, simply run `npm run haven-teardown`.

## Usage as Developer

As a developer, you don't need an AWS account setup since all users of a Haven instance use the account used during the setup by Admin. Instead:

1. Clone this repository
2. Place the `havenAccountInfo.json` file into a `~/.haven` directory.
3. Inside the root directory, run `npm run haven-userSetup`within an hour after the Admin created your account
4. When setup completes, run `npm install` within the root directory and the `client` directory.
5. In root directory, run `npm start` to start up the GUI.

[npm]: https://www.npmjs.com/package/haven-secrets-ui
[pull-requests]: https://github.com/haven-secrets/haven-ui/pulls
[website]: https://haven-secrets.github.io/
[github]: https://github.com/haven-secrets/haven-ui
[haven-core]: https://github.com/haven-secrets/haven
[haven-cli]: https://github.com/haven-secrets/haven-cli
