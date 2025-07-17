import "@mikalyh/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "@mikalyh/lib/store";
import { PagesProgressProvider as ProgressProvider } from "@bprogress/next";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ProgressProvider
        height="4px"
        color="#155dfc"
        options={{ showSpinner: false }}
        shallowRouting
      >
        <Component {...props.pageProps} />
      </ProgressProvider>
    </Provider>
  );
}
