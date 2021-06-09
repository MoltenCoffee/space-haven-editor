function sendToGoogleAnalytics({ name, delta, id }) {
  /* eslint-disable-next-line no-undef */
  gtag("event", name, {
    event_category: "Web Vitals",
    event_label: id,
    value: Math.round(name === "CLS" ? delta * 1000 : delta),
    non_interaction: true,
  });
}

export default sendToGoogleAnalytics;
