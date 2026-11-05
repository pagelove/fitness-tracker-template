export const config={
  "id": "fitness",
  "repo": "fitness-tracker-template",
  "title": "Steady",
  "heading": "A little, often.",
  "intro": "Keep a useful record of movement. Your activities, your pace and a clear view of what you have done.",
  "noun": "activity",
  "plural": "activities",
  "titleField": "title",
  "private": true,
  "fields": [
    {
      "key": "title",
      "label": "Activity",
      "type": "text",
      "required": true
    },
    {
      "key": "date",
      "label": "Date",
      "type": "date",
      "required": true
    },
    {
      "key": "minutes",
      "label": "Duration in minutes",
      "type": "number",
      "required": true
    },
    {
      "key": "distance",
      "label": "Distance in km",
      "type": "number",
      "required": false
    },
    {
      "key": "notes",
      "label": "Notes",
      "type": "textarea",
      "required": false
    }
  ],
  "settings": [
    {
      "key": "name",
      "label": "Tracker name",
      "default": "Steady",
      "type": "text",
      "required": true
    },
    {
      "key": "headline",
      "label": "Headline",
      "default": "A little, often.",
      "type": "text",
      "required": true
    },
    {
      "key": "about",
      "label": "About this tracker",
      "default": "Personal movement records, without medical advice.",
      "type": "textarea",
      "required": true
    },
    {
      "key": "week",
      "label": "Week containing this date",
      "default": "2026-11-04",
      "type": "date",
      "required": true
    },
    {
      "key": "goal",
      "label": "Weekly activity goal in minutes",
      "default": "150",
      "type": "number",
      "required": true
    },
    {
      "key": "timezone",
      "label": "Calendar timezone",
      "default": "America/New_York",
      "type": "text",
      "required": true
    }
  ]
};
