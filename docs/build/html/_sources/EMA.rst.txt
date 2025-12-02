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
- **Platform-independent UX** with paging for long surveys, language support, and survey categories to keep forms organized. It also provide same user experience on both Android and iOS devices. 
- **Dynamic survey updates from server** so questionnaires and media/images can be revised mid-study without reinstalling the app. 
- **Save & Resume** with answered items highlighted surveys can be resumed where left off. 
- **Conditional logic** to show/hide questions based on earlier answers, improving relevance and reducing cognitive load. 
- **Integrated calendar events** for time-sensitive prompts (adds reminders to the native calendar).
- **Local Administration Menu** for on-device management tasks (study setup, diagnostics, etc.).

.. image:: image/EMA/EMA_q_type.png
      :scale: 20%
      :align: center

Prerequisites
=============

- Your study coordinator has provided a **QR code** to join the study.
- A stable internet connection for initial setup and survey/media updates.

Android — Install & Join the Study
==================================

1) Install the App
------------------

1. Open the **Google Play Store** on your Android device.
2. Search for **JTrack EMA+** and install it.

   .. image:: image/EMA/EMA_1.png
      :scale: 40%
      :align: center

3) Join the Study
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
   For more about the study QR code (including how it’s generated), see your project’s QR code documentation.

3) Complete Required App Settings (only if required)
----------------------------------------------------

After a successful login, the app will prompt you to adjust system settings to ensure reliable background operation.

1. Follow the in-app prompt to open **App settings**.

   .. image:: image/EMA/EMA_4.png
      :scale: 40%
      :align: center

2. Open **Battery optimization** and set JTrack EMA+ to **Unrestricted**.

   .. image:: image/EMA/EMA_5.png
      :scale: 40%
      :align: center

3. Confirm **Unrestricted** is selected so Android doesn’t limit background tasks.

   .. image:: image/EMA/EMA_6.png
      :scale: 40%
      :align: center

4. Go back to the **App info** page, scroll to **Remove permission and free up space**, and make sure it is **disabled**.

   .. image:: image/EMA/EMA_7.png
      :scale: 40%
      :align: center

.. tip::
   These settings prevent Android from killing background processes, which can interrupt survey scheduling and media sync. :contentReference[oaicite:8]{index=8}

Using JTrack EMA+
=================

Starting a Survey
-----------------

- Surveys appear according to your study schedule or via push prompts designed in survey designer.
- Long surveys can be open as list view while short survey may use paging. Progress is saved automatically.
   .. image:: image/EMA/EMA_listview.png
      :scale: 40%
      :align: center

Save & Resume
-------------

- You can leave the survey at any time; when you return, your answers are preserved and you can resume where you left-off or may start a new survey. Answered items are highlighted for easy navigation.
   .. image:: image/EMA/EMA_resume.png
      :scale: 40%
      :align: center

Media & Image Sync
------------------

- If a survey references images or media, the latest assets are pulled from the server automatically.

Calendar Events (If Enabled)
----------------------------

- Time-sensitive prompts may add **calendar reminders** to your device to improve adherence. You’ll receive a system notification when it’s time to respond. 

   .. image:: image/EMA/EMA_cal.png
      :scale: 60%
      :align: center

Conditional Logic
-----------------

- Some questions appear only if earlier responses meet certain conditions—this keeps surveys shorter and more relevant. This can be configured by the survey designer in Jdash.

|

Once the app is installed, open the **JTrack EMA+** app and click on the **Join Study** button.

|

.. image:: image/EMA/EMA_2.png
   :scale: 40 %
   :align: center

|

This app needs to access the camera to scan a QR code. Therefore, accept the permission prompt as shown below.

|

.. image:: image/EMA/EMA_3.png
   :scale: 40 %
   :align: center

|

Now you can scan the provided QR code using your device’s camera.

.. important::
   For more information about QR codes and how to generate them, please see the relevant section of this documentation.

Once login is successful, you will see the following screen. It asks you to go to the app settings page and change the settings according to the following steps:

|

.. image:: image/EMA/EMA_4.png
   :scale: 40 %
   :align: center

|


Next, look for **Battery Optimization** and select it.

|

Troubleshooting
===============

- **I can’t scan the QR code**
  - Ensure you granted **Camera** permission.
  - Increase screen brightness on the QR code source (if scanning from another device).
  - Hold the device steady ~15–25 cm from the code.

- **Survey reminders aren’t arriving**
  - On Android, verify **Battery optimization** is **Unrestricted** and “Remove permission and free up space” is **disabled**.
  - Check **Do Not Disturb** or Focus modes.

Then select the **Unrestricted** option as shown below. This step ensures that the JTrack EMA app will not be restricted by the Android system.

|

.. image:: image/EMA/EMA_6.png
   :scale: 40 %
   :align: center

|

Now go back to the **App Info** page and scroll to find **Remove permissions and free up space**, and make sure that it is disabled.

|

.. image:: image/EMA/EMA_7.png
   :scale: 40 %
   :align: center

|

Now the main setup of the JTrack EMA+ application is complete. You can proceed to use the app as intended.

- **A permission was denied by mistake**
  - Go to **System Settings → Apps → JTrack EMA+** and enable the required permission(s).

