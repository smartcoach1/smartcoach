window.SmartCoachConfig = {
  "config_version": "1.0",
  "fallback_mode": "silent_exit",
  "gym": {
    "gym_id": "gym-front",
    "primary_color": "#4ADE80",
    "coach_name": "Mike",
    "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/new_smart_coach-5136596.png?format=webp",
    "show_signoff": true
  },
  "pages": {
    "/": {
      "name": "funnel",
      "enabled": true,
      "launcher_text": "Is your gym website losing you members?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 8
        },
        "card_popup": {
          "enabled": false,
          "delay_seconds": 20
        }
      },
      "card1": {
        "headline": "Most gym websites leak enquiries.",
        "options": [
          {
            "key": "Costing",
            "label": "Is my website really that bad?"
          },
          {
            "key": "Qualifies",
            "label": "Does my gym qualify?"
          },
          {
            "key": "Traffic",
            "label": "What if I already get some enquiries?"
          },
          {
            "key": "Why",
            "label": "Why are you doing this for free?"
          }
        ],
        "subheadline": "Think yours might be one of them?"
      },
      "card2": {
        "Costing": {
          "headline": "Maybe. But that's not the real question.",
          "body": "The real question is whether your website turns enough visitors into members. Most gym owners never compare what they have vs what's possible.",
          "cta": {
            "label": "See if I qualify for a FREE rebuild",
            "url": "/claim",
            "type": "convert"
          }
        },
        "Qualifies": {
          "headline": "Takes 20 seconds to find out.",
          "body": "If you're an independent gym or studio with an existing website, there's a good chance.\n\nAnswer a few quick questions.",
          "cta": {
            "label": "See if I qualify for a FREE rebuild",
            "url": "/claim",
            "type": "convert"
          }
        },
        "Traffic": {
          "headline": "Good. But there's usually more being left behind.",
          "body": "This isn't about whether your site works.\n\nIt's about whether it could work much harder.",
          "cta": {
            "label": "Check my FREE rebuild",
            "url": "/claim",
            "type": "convert"
          }
        },
        "Why": {
          "headline": "Because we're proving something.",
          "body": "Most agencies charge £1k-£3k+. We're rebuilding a small number of gym websites free while we prove our model.",
          "cta": {
            "label": "See if I qualify for a FREE rebuild",
            "url": "/claim",
            "type": "convert"
          }
        }
      }
    }
  }
};
