=====================
JTrack EMA+
=====================

JTrack EMA is available for **Android** and **iOS**:

- In the `Google Play Store <https://play.google.com/store/apps/details?id=inm7.JTrack.JTrack_EMA_Plus>`__
- In `Apple's App Store <https://apps.apple.com/de/app/jtrack-ema/id1605100657>`__

To install this app, first go to the Google Play Store on your Android phone.


What JTrack EMA+ Can Do
=======================

- **Broad question types**: binary, date/time, duration, sliders, single/multiple choice, and more.
- **Platform-independent UX** with paging for long surveys, language support, and survey categories to keep forms organized. It also provides a similar user experience on both Android and iOS devices.
- **Dynamic survey updates from server** so questionnaires and media/images can be revised mid-study without reinstalling the app.
- **Save & Resume** with answered items highlighted so surveys can be resumed where they were left.
- **Conditional logic** to show/hide questions based on earlier answers, improving relevance and reducing cognitive load.
- **HTML text formatting support** so question text and subtext can include simple inline formatting.
- **Integrated calendar events** for time-sensitive prompts so reminders can be added to the phone calendar.
- **Local Administration Menu** for on-device management tasks (study setup, diagnostics, etc.).

.. image:: image/EMA/EMA_q_type.png
   :scale: 20%
   :align: center

Prerequisites
=============

- Your study coordinator has provided a **QR code** to join the study.
- A stable internet connection for initial setup and survey/media updates.

Android - Install & Join the Study
==================================

1) Install the App
------------------

1. Open the **Google Play Store** on your Android device.
2. Search for **JTrack EMA+** and install it.

   .. image:: image/EMA/EMA_1.png
      :scale: 40%
      :align: center

2) Join the Study
-----------------

1. Open **JTrack EMA+** and tap **Join study**.

   .. image:: image/EMA/EMA_2.png
      :scale: 40%
      :align: center

2. When prompted, allow **Camera** access so the app can scan your study QR code.

   .. image:: image/EMA/EMA_3.png
      :scale: 40%
      :align: center

3. Use your device camera to scan the **QR code** provided by your study team.

.. important::
   For more about the study QR code, including how it is generated, see your project's QR code documentation.

3) Complete Required App Settings (only if required)
----------------------------------------------------

After a successful login, the app will prompt you to adjust system settings to ensure reliable background operation.

1. Follow the in-app prompt to open **App settings**.

   .. image:: image/EMA/EMA_4.png
      :scale: 40%
      :align: center


Using JTrack EMA+
=================

Starting a Survey
-----------------

- Surveys appear according to your study schedule or through prompts configured by the study team.
- If no active questions are shown, pull the screen down to refresh.
- Long surveys can open in a list view, while short surveys may use paging. Progress is saved automatically.

   .. image:: image/EMA/EMA_listview.png
      :scale: 40%
      :align: center

Calendar Reminders
------------------

- Some studies can create calendar events on your phone so you receive calendar notifications when a survey is scheduled.
- When the app shows the **Add Event** dialog, choose your preferred phone calendar from the list and tap **Add Event**.
- If you do not want to add the reminder immediately, tap **Not Now**. If you never want the event added for that prompt, tap **I Don't want**.
- Once the event is added, your phone calendar can notify you at the scheduled survey time.

   .. image:: image/EMA/EMA_calendar_add_event.png
      :scale: 35%
      :align: center

Save & Resume
-------------

- You can leave the survey at any time. When you return, your saved answers are preserved and answered items remain highlighted for easier navigation.

   .. image:: image/EMA/EMA_resume.png
      :scale: 40%
      :align: center

Leaving a Survey with Unanswered Questions
------------------------------------------

- When you reach the last page and tap **Submit survey**, JTrack EMA+ checks whether any questions are still unanswered.
- If questions are missing, the app shows a confirmation dialog with the number of unanswered items.
- Choose **Return to questionnaire** if you want to go back and answer more questions before submitting.
- Choose **Submit, answer unanswered questions later** if you want to leave the remaining questions for later. In that case, the unanswered questions stay open and can be shown again later.
- Choose **Submit, I have answered all questions** if you want the remaining unanswered questions to be treated as questions you do not want to answer. In that case, those questions are not shown again.
- This gives the user two different ways to leave the survey, depending on whether unanswered questions should remain pending or be treated as intentionally skipped.

   .. image:: image/EMA/EMA_unanswered_questions.png
      :scale: 35%
      :align: center

Media & Image Sync
------------------

- If a survey references images or media, the latest assets are pulled from the server automatically.

HTML Formatting in Questions
----------------------------

JTrack EMA+ supports a small set of HTML tags in question text and subtext.
This can be used to format questionnaire content without changing the app itself.
Supported tags are:

.. raw:: html

   <ul>
     <li><code>&lt;b&gt;</code> and <code>&lt;strong&gt;</code> for bold text</li>
     <li><code>&lt;i&gt;</code> and <code>&lt;em&gt;</code> for italic text</li>
     <li><code>&lt;u&gt;</code> for underlined text</li>
     <li><code>&lt;br&gt;</code> for a line break</li>
   </ul>

.. raw:: html

   <p>Variants such as <code>&lt;br/&gt;</code> and <code>&lt;br /&gt;</code> are also accepted and rendered as line breaks.</p>

Conditional Logic
-----------------

- Some questions appear only if earlier responses meet certain conditions. This keeps surveys shorter and more relevant.

Troubleshooting
===============

- **I can't scan the QR code**

  Ensure you granted **Camera** permission, increase screen brightness on the QR code source if needed, and hold the device steady about 15 to 25 cm from the code.

- **Survey reminders are not arriving**

  On Android, verify **Battery optimization** is **Unrestricted**, make sure **Remove permission and free up space** is disabled, and check whether **Do Not Disturb** or Focus modes are blocking notifications.

- **A permission was denied by mistake**

  Go to **System Settings -> Apps -> JTrack EMA+** and enable the required permission again.
