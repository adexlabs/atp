import { useMutation, graphql } from "@shopify/hydrogen";

const CUSTOMER_LOGIN_MUTATION = graphql`
  mutation LoginCustomer($email: String!, $password: String!) {
    customerAccessTokenCreate(input: { email: $email, password: $password }) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        message
      }
    }
  }
`;

export default function Login() {
  const [login, { data, error }] = useMutation(CUSTOMER_LOGIN_MUTATION);

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    const response = await login({ variables: { email, password } });

    if (response.data.customerAccessTokenCreate.customerAccessToken) {
      console.log("Login successful", response.data);
      // Save token in cookies/session storage
    } else {
      console.error("Login failed", response.data.customerUserErrors);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
