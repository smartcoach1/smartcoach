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
        "headline": "What’s on your mind about training here?",
        "options": [
          {
            "key": "new",
            "label": "I’m new to lifting. I’d have no idea what to do."
          },
          {
            "key": "lost",
            "label": "I’ve lifted before, but I’m out of the habit."
          },
          {
            "key": "info",
            "label": "I just want to know how training works here."
          },
          {
            "key": "ready",
            "label": "I’m ready to ask about getting started."
          }
        ],
        "subheadline": "Pick what sounds most like you."
      },
      "card2": {
        "new": {
          "headline": "We’ll show you what to do.",
          "body": "A coach can show you how to set up the equipment, practise the lifts with you and help you pick a weight that feels manageable. \n\nKickstart gives you one-to-one time with a coach each week for six weeks.",
          "cta": {
            "label": "See how beginners start",
            "url": "/kickstart",
            "type": "route"
          }
        },
        "lost": {
          "headline": "Start from where you are now.",
          "body": "You don’t have to go back to the weights you used to lift. \n\nWith Kickstart, your coach builds a programme around what feels manageable now and checks in with you one-to-one each week.",
          "cta": {
            "label": "Explore the 6-Week Kickstart",
            "url": "/kickstart",
            "type": "route"
          }
        },
        "info": {
          "headline": "Your own programme, with help nearby.",
          "body": "You book a gym slot and work through your own programme at your pace. \n\nThere’s a coach on the gym floor if you have a question or want a hand with a lift.",
          "cta": {
            "label": "See how gym slots work",
            "url": "/how",
            "type": "route"
          }
        },
        "ready": {
          "headline": "Let’s talk about getting started.",
          "body": "Tell us a little about where you’re starting from and what you’d like help with. \n\nWe’ll text you about Kickstart, and you can decide from there.",
          "cta": {
            "label": "Ask about Kickstart",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        }
      }
    },
    "/how": {
      "name": "Training at Chaos",
      "enabled": true,
      "coach_name": "Jordan",
      "avatar_url": "https://content.app-sources.com/s/6851722238278723/uploads/Coaches_Pictures/Jamie_Chaos_Coaching-4865862.png?format=webp",
      "show_signoff": true,
      "launcher_text": "How does it work?",
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
        "headline": "What are you wondering about training here?",
        "options": [
          {
            "key": "help",
            "label": "Will I be left to figure it out on my own?"
          },
          {
            "key": "pace",
            "label": "Will I have to keep up with everyone else?"
          },
          {
            "key": "support",
            "label": "Can someone show me the ropes first?"
          },
          {
            "key": "ready",
            "label": "This sounds right for me. How do I start?"
          }
        ],
        "subheadline": "Pick what sounds most like you."
      },
      "card2": {
        "help": {
          "headline": "There’s a coach on the gym floor.",
          "body": "You’ll have your own programme to follow. If you’re unsure how to set up the equipment or want someone to check a lift, you can ask the coach on the floor.",
          "cta": {
            "label": "Ask about getting started",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "pace": {
          "headline": "You train at your own pace.",
          "body": "You book a gym slot and work through your own programme, so there’s nobody to keep up with.\n\nTake your time with the lifts, and ask the coach on the floor if you want a hand.",
          "cta": {
            "label": "Ask how to get started",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "support": {
          "headline": "You can start with one-to-one help.",
          "body": "With Kickstart, a coach builds a programme around where you’re starting from. You’ll have one-to-one time with a coach each week for six weeks to practise the lifts and ask questions.",
          "cta": {
            "label": "See what Kickstart includes",
            "url": "/kickstart",
            "type": "route"
          }
        },
        "ready": {
          "headline": "It starts with a short enquiry.",
          "body": "Tell us a little about where you’re starting from and what you’d like help with. We’ll text you about Kickstart, and you can decide from there.",
          "cta": {
            "label": "Ask about Kickstart",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        }
      }
    },
    "/kickstart": {
      "name": "6-Week Kickstart",
      "enabled": true,
      "launcher_text": "Is Kickstart for me?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 12
        },
        "card_popup": {
          "enabled": true,
          "delay_seconds": 30
        }
      },
      "card1": {
        "headline": "Thinking about Kickstart?",
        "options": [
          {
            "key": "confidence",
            "label": "I’m worried I’ll be out of my depth."
          },
          {
            "key": "schedule",
            "label": "I’m not sure I can fit it into my week."
          },
          {
            "key": "consistency",
            "label": "I usually start well, then lose my routine."
          },
          {
            "key": "ready",
            "label": "I’m ready to take the next step."
          }
        ],
        "subheadline": "Pick what’s on your mind."
      },
      "card2": {
        "confidence": {
          "headline": "We’ll start with what feels manageable.",
          "body": "If you’ve never lifted or haven’t trained in a while, we’ll build your programme around where you are now. \n\nA coach can show you how to set up, talk you through the lift and help you choose a weight you’re comfortable with.",
          "cta": {
            "label": "Ask about starting at my level",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "schedule": {
          "headline": "Tell us your week, and we’ll talk it through.",
          "body": "Kickstart includes time with a coach each week for six weeks. \n\nIf you’re weighing up whether the training will fit around work or family, tell us what your week looks like and we can talk it through.",
          "cta": {
            "label": "Ask about fitting it in",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "consistency": {
          "headline": "A missed session doesn’t send you back to square one.",
          "body": "You’ll have a programme to come back to when life gets busy. In your weekly one-to-one, you can talk through what got in the way and what would make it easier to keep going.",
          "cta": {
            "label": "Ask about staying on track",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "ready": {
          "headline": "We’ll text you about getting started.",
          "body": "Fill in the short form and tell us where you’re starting from and what you’d like help with. We’ll text you about Kickstart, and you can decide from there.",
          "cta": {
            "label": "Enquire about Kickstart",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        }
      }
    },
    "/coaches": {
      "name": "Meet The Coaches",
      "enabled": true,
      "launcher_text": "What’s the coaching like?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 10
        },
        "card_popup": {
          "enabled": false,
          "delay_seconds": 20
        }
      },
      "card1": {
        "headline": "What would you like to know about being coached here?",
        "options": [
          {
            "key": "ask-for-help",
            "label": "I’d feel silly asking a basic question."
          },
          {
            "key": "coaching-pace",
            "label": "I’m worried I’ll be pushed too hard."
          },
          {
            "key": "belong",
            "label": "I don’t want to feel like just another member."
          },
          {
            "key": "ready",
            "label": "I’d like to talk to someone about starting."
          }
        ],
        "subheadline": "Pick what’s on your mind."
      },
      "card2": {
        "ask-for-help": {
          "headline": "You can ask, even if it feels obvious.",
          "body": "If you’re unsure how to set up the equipment or want someone to check a lift, just ask the coach on the gym floor. That’s part of what they’re there for.",
          "cta": {
            "label": "Ask about getting started",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "coaching-pace": {
          "headline": "You can tell us when something feels too much.",
          "body": "We build your Kickstart programme around where you are now. If a lift or weight feels like too much, say so and we’ll help you find a starting point you’re comfortable with.",
          "cta": {
            "label": "Ask about starting gently",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "belong": {
          "headline": "You’ll be coached as a person, not a number.",
          "body": "Your Kickstart programme is built around where you’re starting from, and you have one-to-one time with a coach each week. \n\nThey get to know you, how you’re getting on and what you want help with.",
          "cta": {
            "label": "Ask about Kickstart",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        },
        "ready": {
          "headline": "We’ll start with a text.",
          "body": "Tell us a little about yourself and what you’d like help with. We’ll text you about Kickstart, and you can ask anything you’d like to know before deciding.",
          "cta": {
            "label": "Ask about Kickstart",
            "url": "/kickstart-enquiry",
            "type": "convert"
          }
        }
      }
    },
    "/women-strength-course": {
      "name": "Women's Course",
      "enabled": true,
      "coach_name": "Jordan",
      "avatar_url": "https://content.app-sources.com/s/6851722238278723/uploads/Coaches_Pictures/Jamie_Chaos_Coaching-4865862.png?format=webp",
      "show_signoff": true,
      "launcher_text": "Is this course for me?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 12
        },
        "card_popup": {
          "enabled": true,
          "delay_seconds": 30
        }
      },
      "card1": {
        "headline": "What would help you feel ready to start?",
        "options": [
          {
            "key": "beginner",
            "label": "I’ve never lifted. Will everyone be ahead of me?"
          },
          {
            "key": "confidence",
            "label": "I’d feel self-conscious lifting in front of people."
          },
          {
            "key": "schedule",
            "label": "I’d love to do it, but I need to know if I can make the sessions."
          },
          {
            "key": "ready",
            "label": "I’d like to join. What do I do next?"
          }
        ],
        "subheadline": "Pick what’s on your mind."
      },
      "card2": {
        "beginner": {
          "headline": "Here’s what you’ll start with.",
          "body": "You can join even if you’ve never lifted before. Your coach shows you how to set up each lift and helps you choose a starting weight.",
          "cta": {
            "label": "Enquire about the course",
            "url": "/women-strength-course-enquiry",
            "type": "convert"
          }
        },
        "confidence": {
          "headline": "It’s okay to feel awkward at first.",
          "body": "It can feel awkward trying a lift for the first time when there are other people around. You’re there to learn the movements and build confidence at your own pace, and you can take your time even if others move on.",
          "cta": {
            "label": "Enquire about the course",
            "url": "/women-strength-course-enquiry",
            "type": "convert"
          }
        },
        "schedule": {
          "headline": "Let’s see if it fits your week.",
          "body": "If you’re trying to fit the course around work or family, ask us about the session times before you decide.",
          "cta": {
            "label": "Enquire about the course",
            "url": "/women-strength-course-enquiry",
            "type": "convert"
          }
        },
        "ready": {
          "headline": "Send us a course enquiry.",
          "body": "Answer a few quick questions, and Jamie or Jordan will get in touch to talk through the course and answer anything you’d like to ask. You decide whether to join after that conversation.",
          "cta": {
            "label": "Enquire about the course",
            "url": "/women-strength-course-enquiry",
            "type": "convert"
          }
        }
      }
    }
  }
};
