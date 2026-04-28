window.SmartCoachConfig = {
  "config_version": "1.0",
  "fallback_mode": "silent_exit",
  "gym": {
    "gym_id": "smartcoach-demo",
    "primary_color": "#e8ff47",
    "coach_name": "Mike",
    "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/new_smart_coach-5136596.png?format=webp",
    "show_signoff": true
  },
  "pages": {
    "/smartcoach-demo": {
      "name": "Smart Coach Demo",
      "enabled": true,
      "launcher_text": "Ask Mike anything 👋",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 10
        },
        "card_popup": {
          "enabled": true,
          "delay_seconds": 30
        }
      },
      "card1": {
        "headline": "Most gym owners land here with the same question.",
        "options": [
          {
            "key": "how",
            "label": "💬 How does Smart Coach actually work?"
          },
          {
            "key": "cost",
            "label": "💰 What does it cost after 30 days?"
          },
          {
            "key": "mygym",
            "label": "🏋️ Will it work for my type of gym?"
          },
          {
            "key": "setup",
            "label": "⚡ How quick is it to set up?"
          }
        ],
        "subheadline": "Pick what's on your mind."
      },
      "card2": {
        "how": {
          "headline": "It has a live conversation with every website visitor",
          "body": "When someone lands on your site, Smart Coach opens naturally — asks what's holding them back, handles their hesitation, and nudges them toward enquiring. It runs 24/7 without you doing anything.",
          "cta": {
            "label": "Claim My Free Pilot Spot",
            "url": "/smartcoach-demo#cta",
            "type": "convert"
          }
        },
        "cost": {
          "headline": "Free for 30 days. £147/month after that.",
          "body": "No setup cost, no contract, no catch. The pilot is genuinely free — I just want gyms running it so I can see it working across different sites. After 30 days it's £147/month if you want to keep it.",
          "cta": {
            "label": "Claim My Free Pilot Spot",
            "url": "/smartcoach-demo#cta",
            "type": "convert"
          }
        },
        "mygym": {
          "headline": "If you have a website and want more enquiries — yes.",
          "body": "It's already live on Studio Fit. I'm installing it on CrossFit boxes, PT studios, Pilates and yoga studios, boutique gyms. If people visit your website before they enquire — Smart Coach helps convert more of them.",
          "cta": {
            "label": "Claim My Free Pilot Spot",
            "url": "/smartcoach-demo#cta",
            "type": "convert"
          }
        },
        "setup": {
          "headline": "Two lines of code. Done in minutes.",
          "body": "I handle the whole setup for you. You don't touch any code. I build the config, install it, and it's live on your site the same day. Zero tech headaches on your end.",
          "cta": {
            "label": "Claim My Free Pilot Spot",
            "url": "/smartcoach-demo#cta",
            "type": "convert"
          }
        }
      }
    }
  }
};
