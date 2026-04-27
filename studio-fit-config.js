window.SmartCoachConfig = {
  "config_version": "1.0",
  "fallback_mode": "silent_exit",
  "gym": {
    "gym_id": "studio-fit",
    "primary_color": "#FF0400",
    "coach_name": "Mike",
    "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/new_smart_coach-5136596.png?format=webp",
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
        "headline": "Most people land here feeling a bit unsure.",
        "options": [
          {
            "key": "tried",
            "label": "I've tried before... I need something that actually works"
          },
          {
            "key": "schedule",
            "label": "It has to fit around my schedule"
          },
          {
            "key": "how",
            "label": "I just want to understand how this works"
          },
          {
            "key": "apply",
            "label": "I'm ready — I just need the next step"
          }
        ],
        "subheadline": "Pick what feels most like you."
      },
      "card2": {
        "tried": {
          "headline": "You're not the only one.",
          "body": "Most people have tried things that didn't stick — not because they didn't care, but because it didn't fit their life.\n\nOur programs are designed to be realistic, structured, and something you can actually keep going with.",
          "cta": {
            "label": "Show me the best place to start",
            "url": "/programs",
            "type": "route"
          }
        },
        "schedule": {
          "headline": "It has to fit around real life.",
          "body": "If it doesn't work with your week, you won't stick to it.\n\nThe timetable will quickly show you what's realistic — and what could actually work for you.",
          "cta": {
            "label": "Show me what could fit",
            "url": "/timetables",
            "type": "route"
          }
        },
        "how": {
          "headline": "That's a good place to start.",
          "body": "Once you see how everything fits together, it's much easier to decide if it's right for you.\n\nNo guesswork — just a clear, simple way to understand it.",
          "cta": {
            "label": "Show me how it works",
            "url": "/how",
            "type": "route"
          }
        },
        "apply": {
          "headline": "That's usually the point people get to.",
          "body": "You don't need to overthink it — just take the next step and we'll guide you from there. \n\nIt's quick, simple, and gives you a clear direction.",
          "cta": {
            "label": "Take me to the next step",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/programs-bigger-leaner-stronger": {
      "name": "BLS",
      "enabled": true,
      "coach_name": "Lewis",
      "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/smart_coach_2-5143066.png?format=webp",
      "show_signoff": true,
      "launcher_text": "Ready to get back on track?",
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
        "headline": "Be honest — are you where you want to be right now?",
        "options": [
          {
            "key": "slipped",
            "label": "I've let things slip and don't feel like myself anymore"
          },
          {
            "key": "fall-off",
            "label": "I start strong... then fall off after a few weeks"
          },
          {
            "key": "busy",
            "label": "I'm busy with work and family — it has to be realistic"
          },
          {
            "key": "control",
            "label": "I just want to feel back in control again"
          }
        ],
        "subheadline": "Pick one that feels most like you right now."
      },
      "card2": {
        "slipped": {
          "headline": "You don't need to get fitter before you start",
          "body": "Life gets busy — work, family, everything else takes over.\n\nBefore you know it, you’re out of routine and not feeling like yourself.\n\nYou don’t need a complete overhaul — just a clear way to get back on track.\n\nThat’s exactly what this is built for.",
          "cta": {
            "label": "Show me how to get back on track",
            "url": "/apply",
            "type": "convert"
          }
        },
        "fall-off": {
          "headline": "It's not that you can't stick to it.",
          "body": "Most plans rely on motivation — and that’s why they fall apart.\n\nYou start strong, life gets busy, and it slips again.\n\nThis is built on structure, coaching, and accountability so you actually follow through.\n\nNo guesswork. No drifting.",
          "cta": {
            "label": "Show me how to stay consistent",
            "url": "/apply",
            "type": "convert"
          }
        },
        "busy": {
          "headline": "It has to fit your life — or it won't work.",
          "body": "You’re busy. Work, family, responsibilities — it all adds up.\n\nIf it doesn’t fit your week, you won’t stick to it.\n\nThis is designed to work around real schedules so you can stay consistent without adding more pressure.",
          "cta": {
            "label": "Show me how this fits my week.",
            "url": "/apply",
            "type": "convert"
          }
        },
        "control": {
          "headline": "This is about more than fitness.",
          "body": "It’s about having more energy, more confidence, and feeling like yourself again.\n\nStronger, fitter, and back in control.\n\nFor you — and for the people around you.",
          "cta": {
            "label": "Show me how to get started",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/timetable-cheltenham": {
      "name": "Cheltenham timetable",
      "enabled": true,
      "coach_name": "Sarah",
      "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/smart-coach-sarah-7295376.png?format=webp",
      "show_signoff": true,
      "launcher_text": "Not sure if this fits your week?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 8
        },
        "card_popup": {
          "enabled": true,
          "delay_seconds": 22
        }
      },
      "card1": {
        "headline": "Not sure you can realistically fit this into your week?",
        "options": [
          {
            "key": "schedule",
            "label": "My schedule changes — I need flexibility"
          },
          {
            "key": "times",
            "label": "How often would I actually need to come"
          },
          {
            "key": "commitment",
            "label": "What if I miss sessions or fall off?"
          },
          {
            "key": "start",
            "label": "Just show me the easiest way to start"
          }
        ],
        "subheadline": "Pick what feels closest to your situation."
      },
      "card2": {
        "schedule": {
          "headline": "Flexibility matters more than perfection.",
          "body": "That's how most people start.\n\nYour week won’t always look the same — and it doesn’t need to.\n\nYou can fit sessions around your life and still make real progress.",
          "cta": {
            "label": "Let's build something that fits",
            "url": "/apply",
            "type": "convert"
          }
        },
        "times": {
          "headline": "You don't need to come every day.",
          "body": "Most people get great results from 2–3 sessions per week.\n\nIt’s not about doing everything — it’s about doing something you can stick to.\n\nThat's what actually works.",
          "cta": {
            "label": "Show me what this could look like",
            "url": "/apply",
            "type": "convert"
          }
        },
        "commitment": {
          "headline": "Missing a session doesn't mean you've failed.",
          "body": "That happens to everyone.\n\nThe difference is having something realistic you can come back to.\n\nNot something you fall off completely.\n\nWe help you stay on track even when life gets busy.",
          "cta": {
            "label": "Let's make this work for you",
            "url": "/apply",
            "type": "convert"
          }
        },
        "start": {
          "headline": "Start with the easiest option first.",
          "body": "You don't need to figure everything out before you begin.\n\nMost people just need a simple place to start — then build from there.\n\nWe shape it around your week so it feels manageable straight away.",
          "cta": {
            "label": "Start with the easiest next step",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/programs-fitcamp-revolution": {
      "name": "Fitcamp",
      "enabled": true,
      "coach_name": "Sarah",
      "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/smart-coach-sarah-7295376.png?format=webp",
      "show_signoff": true,
      "launcher_text": "Not sure where to start?",
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
        "headline": "Be honest — what's actually holding you back right now?",
        "options": [
          {
            "key": "not-fit",
            "label": "I feel like I need to get fitter before I start"
          },
          {
            "key": "commitment",
            "label": "I've started before... I just don't stick to it"
          },
          {
            "key": "enjoy",
            "label": "I never seem to find something I can actually stick to"
          },
          {
            "key": "hate",
            "label": "I hate the idea of walking into a gym and not knowing what I'm doing"
          }
        ],
        "subheadline": "Pick the one that feels most true for you."
      },
      "card2": {
        "not-fit": {
          "headline": "You don't need to get fitter before you start.",
          "body": "That’s one of the biggest reasons people put this off.\n\nThis is built for when you feel unfit, out of routine, and unsure where to begin.\n\nYou are not expected to keep up. You just need a simple place to start.\n\nThat’s exactly what the 28 days are for.",
          "cta": {
            "label": "Show me how to get started",
            "url": "/apply",
            "type": "convert"
          }
        },
        "commitment": {
          "headline": "It's not that you don't stick to it.",
          "body": "It’s what happens a couple of weeks in when life gets busy and everything drops off.\n\nThat’s where most plans fail.\n\nThey expect too much, too quickly.\n\nThis is built to be realistic from day one — so you can actually keep going this time.",
          "cta": {
            "label": "Show me how to stay consistent",
            "url": "/apply",
            "type": "convert"
          }
        },
        "enjoy": {
          "headline": "You don't need a better plan.",
          "body": "You need something simple that actually fits your life.\n\nWhen everything feels different, it’s easy to second-guess and do nothing.\n\nThis keeps things clear and structured — so you know exactly what to do each week.\n\nAnd more importantly... you can stick to it.",
          "cta": {
            "label": "Show me how this could work for me",
            "url": "/apply",
            "type": "convert"
          }
        },
        "hate": {
          "headline": "You won't feel out of place here.",
          "body": "That feeling of walking in and not knowing what to do — that’s what puts people off.\n\nNot the workouts.\n\nFrom your first session, you are shown exactly what to do.\n\nNo guessing. No awkwardness. No feeling like you don’t belong.",
          "cta": {
            "label": "Show me what my first session would look like",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/how": {
      "name": "How",
      "enabled": true,
      "coach_name": "Russ",
      "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/smart_coach_3-5143066.png?format=webp",
      "show_signoff": true,
      "launcher_text": "How does this work?",
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
        "headline": "Not sure how this actually works?",
        "options": [
          {
            "key": "start",
            "label": "What actually happens when I start"
          },
          {
            "key": "keep-up",
            "label": "What if I can't keep up?"
          },
          {
            "key": "scared",
            "label": "Will this feel too intense?"
          },
          {
            "key": "want-simple",
            "label": "I just want something simple — is this?"
          }
        ],
        "subheadline": "Pick the one that feels closest to what you're thinking"
      },
      "card2": {
        "start": {
          "headline": "It's simpler than you think.",
          "body": "You don’t need to figure anything out first.\n\nYou show up, follow the session, and we guide you through it step by step.\n\nNo guesswork. No pressure. Just a clear place to begin.",
          "cta": {
            "label": "Get started",
            "url": "/apply",
            "type": "convert"
          }
        },
        "keep-up": {
          "headline": "You're not expected to keep up.",
          "body": "Everyone starts at a different level.\n\nEverything is coached so you can go at your own pace and build confidence as you go.\n\nYou’re supported the whole way through.",
          "cta": {
            "label": "Take your first step",
            "url": "/apply",
            "type": "convert"
          }
        },
        "scared": {
          "headline": "It won't feel overwhelming.",
          "body": "You’re eased in gradually — not thrown in at the deep end.\n\nThe focus is building momentum, not pushing you too hard too soon.\n\nThat’s why people stick with it.",
          "cta": {
            "label": "Start here",
            "url": "/apply",
            "type": "convert"
          }
        },
        "want-simple": {
          "headline": "This is exactly what it's built for.",
          "body": "A simple starting point. A clear plan. Ongoing support.\n\nNo overthinking. No trying to work it out alone.\n\nJust a system that helps you actually get going.",
          "cta": {
            "label": "Apply now",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/testimonials": {
      "name": "Testimonials",
      "enabled": true,
      "launcher_text": "Could this be you?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 8
        },
        "card_popup": {
          "enabled": true,
          "delay_seconds": 22
        }
      },
      "card1": {
        "headline": "Be honest — are you wondering if this would actually work for you?",
        "options": [
          {
            "key": "like-me",
            "label": "Are these people actually like me?"
          },
          {
            "key": "before-starting",
            "label": "Did they feel like I do before starting?"
          },
          {
            "key": "results",
            "label": "What kind of results did they actually get?"
          },
          {
            "key": "possible",
            "label": "Could I actually do this too?"
          }
        ],
        "subheadline": "Most people you're seeing here felt exactly the same before they started."
      },
      "card2": {
        "like-me": {
          "headline": "Yes — most of them are.",
          "body": "Busy with work, family, out of routine, and unsure where to start.\n\nMost aren’t ‘gym people’ — they just reached a point where something had to change.\n\nThat’s usually when they come to us.",
          "cta": {
            "label": "See how to get started",
            "url": "/apply",
            "type": "convert"
          }
        },
        "before-starting": {
          "headline": "Pretty much all of them felt like that.",
          "body": "Nervous. Unsure. Wondering if they’d actually stick to it this time.\n\nThat’s why everything is structured and coached — so you’re not relying on motivation alone.\n\nYou’re supported from day one.",
          "cta": {
            "label": "Take the first step",
            "url": "/apply",
            "type": "convert"
          }
        },
        "results": {
          "headline": "Better than they expected — but not overnight.",
          "body": "In the first few weeks, most people start to feel fitter, stronger, and more in control again.\n\nFor many, it starts with something like the 28-day kickstart — a simple way to build momentum early.\n\nFrom there, the real change builds.",
          "cta": {
            "label": "Start your first step",
            "url": "/apply",
            "type": "convert"
          }
        },
        "possible": {
          "headline": "If you’re thinking about it, you’re probably ready.",
          "body": "You don’t need to be fit. You don’t need confidence.\n\nYou just need a starting point — and a structure that actually works.\n\nThat’s what this gives you.",
          "cta": {
            "label": "Get started now",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/about": {
      "name": "About",
      "enabled": true,
      "coach_name": "Russ",
      "avatar_url": "https://content.app-sources.com/s/591844641304854511/uploads/Images/smart_coach_3-5143066.png?format=webp",
      "show_signoff": true,
      "launcher_text": "Why do people choose this?",
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
        "headline": "Why people choose Studio Fit over a normal gym",
        "options": [
          {
            "key": "different",
            "label": "How is this different from a normal gym?"
          },
          {
            "key": "for-me",
            "label": "Is this right for someone like me?"
          },
          {
            "key": "stick",
            "label": "Why do people actually stick to this?"
          },
          {
            "key": "why-better",
            "label": "Why do people choose this over other gyms?"
          }
        ],
        "subheadline": "Pick what you're thinking — we'll keep it simple."
      },
      "card2": {
        "different": {
          "headline": "You're not left to figure it out.",
          "body": "Everything is coached and structured, so you always know what you’re doing — no guessing, no wandering around.\n\nThat’s the biggest difference from a normal gym.\n\nMost people say it just feels easier to stick to.",
          "cta": {
            "label": "See how it works",
            "url": "/apply",
            "type": "convert"
          }
        },
        "for-me": {
          "headline": "It's built for people like you.",
          "body": "Most members didn’t feel fit, confident, or consistent when they started.\n\nThis is designed for real people with busy lives — not gym pros.\n\nYou’re supported from day one so you can actually keep going.",
          "cta": {
            "label": "See how people get started",
            "url": "/apply",
            "type": "convert"
          }
        },
        "stick": {
          "headline": "It actually fits into real life.",
          "body": "You’ve got a clear plan, support from coaches, and sessions that fit into your week.\n\nNo overthinking. No trying to work it out alone.\n\nThat’s why people stay consistent.",
          "cta": {
            "label": "See how it fits your week",
            "url": "/apply",
            "type": "convert"
          }
        },
        "why-better": {
          "headline": "It feels doable from the start",
          "body": "You’re not overwhelmed, and you’re not left guessing.\n\nYou’ve got a clear way to begin and a structure that keeps you moving forward.\n\nThat’s what makes the difference.",
          "cta": {
            "label": "See if it's right for you",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/location-cheltenham": {
      "name": "Cheltenham",
      "enabled": true,
      "launcher_text": "Thinking about training in Cheltenham?",
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
        "headline": "Worried about how this would work with your schedule?",
        "options": [
          {
            "key": "location",
            "label": "I'm not sure how easy this is to get to"
          },
          {
            "key": "schedule",
            "label": "I need something that actually fits around my week"
          },
          {
            "key": "hate-gym",
            "label": "I don't want a typical gym environment"
          },
          {
            "key": "start",
            "label": "Honestly, I just need to get started"
          }
        ],
        "subheadline": "Most people assume it won't fit. In reality, it usually does."
      },
      "card2": {
        "location": {
          "headline": "It's easier to get to than you think.",
          "body": "This is one of the first things people worry about.\n\nMost members felt the same before they started.\n\nBut once they found a couple of session times that worked, it quickly became part of their week.\n\nThere are early mornings, evenings, and flexible options — so it fits around real life.",
          "cta": {
            "label": "Show me what would actually work",
            "url": "/timetable-cheltenham",
            "type": "route"
          }
        },
        "schedule": {
          "headline": "It has to fit around real life.",
          "body": "You don’t need loads of time — most people train 2–3 times per week.\n\nThe key is having something structured that works around your schedule.\n\nOnce that’s in place, consistency becomes much easier.",
          "cta": {
            "label": "Show me what would fit my week",
            "url": "/timetable-cheltenham",
            "type": "route"
          }
        },
        "hate-gym": {
          "headline": "This isn’t a typical gym environment.",
          "body": "It’s coached, structured, and full of people who felt exactly the same when they started.\n\nNo egos. No pressure to keep up.\n\nJust a clear plan and support so you can actually progress.",
          "cta": {
            "label": "Show me how it works",
            "url": "/how",
            "type": "route"
          }
        },
        "start": {
          "headline": "Good — you just need a clear next step.",
          "body": "That’s exactly where most people are when they come to us.\n\nYou don’t need everything figured out — you just need to start.\n\nThe next step is a quick application so we can guide you properly.\n\nSimple and straightforward.",
          "cta": {
            "label": "Take me to the next step",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/timetable-gloucester": {
      "name": "Gloucester timetable",
      "enabled": true,
      "launcher_text": "Not sure if this fits your week?",
      "behaviour": {
        "message_alert": {
          "enabled": true,
          "delay_seconds": 8
        },
        "card_popup": {
          "enabled": true,
          "delay_seconds": 22
        }
      },
      "card1": {
        "headline": "Not sure if you can realistically fit this into your week?",
        "options": [
          {
            "key": "flexibility",
            "label": "My schedule changes — I need flexibility"
          },
          {
            "key": "commitment",
            "label": "How often would I actually need to come?"
          },
          {
            "key": "miss",
            "label": "What if I miss sessions or fall off?"
          },
          {
            "key": "start",
            "label": "Just show me the easiest way to start"
          }
        ],
        "subheadline": "Pick what feels closest to your situation."
      },
      "card2": {
        "flexibility": {
          "headline": "Flexibility matters more than perfection.",
          "body": "That's how most people start.\n\nYour week won't always look the same — and it doesn't need to.\n\nYou can fit sessions around your life and still make real progress.",
          "cta": {
            "label": "Let's build something that fits",
            "url": "/apply",
            "type": "convert"
          }
        },
        "commitment": {
          "headline": "You don't need to come every day.",
          "body": "Most people get great results from 2-3 sessions per week.\n\nIt's not about doing everything — it's about doing something you can stick to.\n\nThat's what actually works.",
          "cta": {
            "label": "Show me what this could look like",
            "url": "/apply",
            "type": "convert"
          }
        },
        "miss": {
          "headline": "Missing a session doesn't mean you've failed.",
          "body": "That happens to everyone. The difference is having something realistic you can come back to.\n\nNot something you fall off completely.\n\nWe help you stay on track even when life gets busy.",
          "cta": {
            "label": "Let's make this work for you",
            "url": "/apply",
            "type": "convert"
          }
        },
        "start": {
          "headline": "Start with the easiest option first.",
          "body": "You don't need to figure everything out before you begin.\n\nMost people just need a simple place to start — then build from there.\n\nWe shape it around your week so it feels manageable straight away.",
          "cta": {
            "label": "Start with the easiest next step",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    },
    "/location-gloucester": {
      "name": "Gloucester",
      "enabled": true,
      "launcher_text": "Thinking about training in Gloucester?",
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
        "headline": "Not sure how this would work with your schedule?",
        "options": [
          {
            "key": "location",
            "label": "I'm not sure how easy this is to get to"
          },
          {
            "key": "flexibility",
            "label": "I need something that actually fits around my week"
          },
          {
            "key": "hate-gym",
            "label": "I don't want a typical gym environment"
          },
          {
            "key": "start",
            "label": "Honestly, I just need to get started"
          }
        ],
        "subheadline": "Most people assume it won't fit. In reality, it usually does."
      },
      "card2": {
        "location": {
          "headline": "It's easier to get to than you think.",
          "body": "This is one of the first things people worry about.\n\nMost members felt the same before they started. But once they found a couple of session times that worked, it quickly became part of their week.\n\nThere are early mornings, evenings, and flexible options — so it fits around real life.",
          "cta": {
            "label": "Show me what would actually work",
            "url": "/timetable-gloucester",
            "type": "route"
          }
        },
        "flexibility": {
          "headline": "It has to fit around real life.",
          "body": "You don't need loads of time — most people train 2-3 times per week.\n\nThe key is having something structured that works around your schedule.\n\nOnce that's in place, consistency becomes much easier.",
          "cta": {
            "label": "Show me what would fit my week",
            "url": "/timetable-gloucester",
            "type": "route"
          }
        },
        "hate-gym": {
          "headline": "This isn't a typical gym environment.",
          "body": "It's coached, structured, and full of people who felt exactly the same when they started.\n\nNo egos. No pressure to keep up. Just a clear plan and support so you can actually progress.",
          "cta": {
            "label": "Show me how it works",
            "url": "/how",
            "type": "route"
          }
        },
        "start": {
          "headline": "Good — you just need a clear next step.",
          "body": "That's exactly where most people are when they come to us.\n\nYou don't need everything figured out — you just need to start.\n\nThe next step is a quick application so we can guide you properly. Simple and straightforward.",
          "cta": {
            "label": "Take me to the next step",
            "url": "/apply",
            "type": "convert"
          }
        }
      }
    }
  }
};
