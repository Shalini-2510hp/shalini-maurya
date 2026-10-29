/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ComingSoonLanding } from "./components/ComingSoonLanding";
import { FeedbackModal } from "./components/FeedbackModal";
import { PrivacyModal } from "./components/PrivacyModal";

export default function App() {
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      {/* Exact Coming Soon design uploaded by user */}
      <ComingSoonLanding
        onOpenFeedback={() => setFeedbackOpen(true)}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />

      {/* Interactive Research Survey & Feedback Modal */}
      <FeedbackModal
        isOpen={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
      />

      {/* Concept Privacy & Research Notice Modal */}
      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </>
  );
}

