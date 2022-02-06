/* eslint-disable no-console */
export default function ({ $axios, redirect }) {
  $axios.defaults.timeout = 30000; // Sets timeout

  $axios.onError((error) => {
    if (error.response) {
      console.error(
        "Plugin Axios error",
        error.response.status,
        error.response.data
      );
    } else {
      console.error("Plugin Axios error", error);
    }
  });
}
