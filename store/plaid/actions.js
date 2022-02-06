import { plaid } from "@/config";

export default {
  getLinkToken({ commit }) {
    const body = {
      client_id: `${plaid.client_id}`,
      secret: `${plaid.plaid_secret}`,
      client_name: "Insert Client name here",
      country_codes: ["US"],
      language: "en",
      user: {
        client_user_id: "unique_user_id",
      },
      products: ["auth"],
    };
    this.$axios
      .post("nuxtapi/plaid/postLinkToken", body)
      .then((resp) => {
        commit("SET_LINK_TOKEN", resp.data);
      })
      .catch((e) => console.error(e));
  },
};
