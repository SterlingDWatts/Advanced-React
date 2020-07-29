// This is client side config only - don't put anything in here that shouldn't be public!
export const endpoint = `http://localhost:4444`;
export const perPage = 4;
export default {
  STRIPE_KEY:
    process.env.NEXT_PUBLIC_STRIPE_KEY ||
    "pk_test_51H9wYmCHHp53pfA8FR7xdzKuTleMP86DMnMAr7XNzVlyNraVzDXPTMYVBO0gwsARuPkUZJ7044ZPMTnM0gHxMVRk004LoI1MAo", // TODO remove key
};
