// Plausible Analytics custom event helper
// Plausible auto-tracks page views; this file handles custom events.

declare global {
  interface Window {
    plausible?: (event: string, options?: { props: Record<string, string> }) => void;
  }
}

function track(event: string, props?: Record<string, string>) {
  window.plausible?.(event, props ? { props } : undefined);
}

/** Fires when a user views a topic page */
export function trackTopicView(topicId: string, topicTitle: string) {
  track("Topic Viewed", { topic_id: topicId, topic_title: topicTitle });
}

/** Fires when a user submits a question (count only — no question content) */
export function trackQuestionAsked(tab: "ask" | "diagnosis", language: string) {
  track("Question Asked", { tab, language });
}

/** Fires when a user changes language */
export function trackLanguageChange(language: string) {
  track("Language Changed", { language });
}
