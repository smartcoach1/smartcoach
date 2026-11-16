window.SmartCoachConfig = {
  "config_version": "1.0",
  "fallback_mode": "silent_exit",
  "gym": {
    "gym_id": "chaos-coaching",
    "primary_color": "#A8422d",
    "coach_name": "Jamie",
    "avatar_url": "https://content.app-sources.com/s/6851722238278723/uploads/Coaches_Pictures/Jamie_Bell_Chaos_Coaching-4844668.png?format=webp",
    "show_signoff": true
  },
  "pages": {
    "/": {
      "name": "Homepage",
      "enabled": true,
      "launcher_text": "Not sure where to start?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 10
        },
        "card_popup": {
          "enabled": true,
          "delay_seconds": 20
        }
      },
      "card1": {
        "headline": "Most people feel a bit unsure before they walk into a strength gym.",
        "options": [
          {
            "key": "new",
            "label": "I’ve never done strength training before"
          },
          {
            "key": "lost",
            "label": "I’ve trained before but lost my way"
          },
          {
            "key": "info",
            "label": "I just want to know what it involves"
          },
          {
            "key": "ready",
            "label": "I’m ready, what’s the next step?"
          }
        ],
        "subheadline": "Pick what sounds most like you."
      },
      "card2": {
        "new": {
          "headline": "Everyone starts somewhere.",
          "body": "You don't need to know what you're doing. The coaches show you every lift and build you up at a pace that suits you.",
          "cta": {
            "label": "See how we start new people",
            "url": "/kickstart",
            "type": "route"
          }
        },
        "lost": {
          "headline": "That's more common than you'd think.",
          "body": "Most people don't lack effort, they lack a plan they can follow. A coach and a clear programme fix that quickly.",
          "cta": {
            "label": "Show me how coaching works",
            "url": "/how",
            "type": "route"
          }
        },
        "info": {
          "headline": "Fair enough, it helps to see it first.",
          "body": "Have a look at how the sessions work, who trains here and what to expect, then decide if it's for you.",
          "cta": {
            "label": "Show me what to expect",
            "url": "/kickstart",
            "type": "route"
          }
        },
        "ready": {
          "headline": "Good, let's get you started.",
          "body": "It's quick and there's no pressure. Tell us a bit about you and we'll guide you from there.",
          "cta": {
            "label": "Take me to the next step",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        }
      }
    }
  }
};
