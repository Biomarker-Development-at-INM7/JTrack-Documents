=====================
JTrack Social
=====================

JTrack Social is available for **Android** and **iOS**:

- In the `Google Play Store <https://play.google.com/store/apps/details?id=inm7.JTrack.JTrack_Social>`__
- In `Apple's App Store <https://apps.apple.com/de/app/jtrack-social/id1645319896>`__


Prerequisites
=============

- Your study coordinator has provided you with a **QR code** to join the study.
- A stable internet connection is required during the initial setup.

.. _jtrack-social-android:

Android - Install & Join the Study
==================================

1. Install the App
------------------

1. Open the **Google Play Store** on your Android device.
2. Search for **JTrack Social** and install it.

.. image:: image/Social/social_1.png
   :scale: 40%
   :align: center

2. Join the Study
-----------------

1. Open **JTrack Social** and tap **Join study**.

   .. image:: image/Social/social_2.png
      :scale: 40%
      :align: center

2. When prompted, allow **Camera** access so the app can scan your study QR code.

   .. image:: image/Social/social_3.png
      :scale: 40%
      :align: center

3. Use your device camera to scan the **QR code** provided by your study team.

.. important::
   For more about the study QR code, including how it is generated, see the project's QR code documentation.

3. Complete Required Android Settings
-------------------------------------

After successful login, the app may prompt you to adjust Android system settings so background data collection can run reliably.

1. Tap the in-app button to open the **App settings** screen.

   .. image:: image/Social/social_4.png
      :scale: 40%
      :align: center

2. **Disable** **Remove permission and free up space**.

   .. image:: image/Social/social_6.png
      :scale: 40%
      :align: center

3. Open **Battery optimization** and set JTrack Social to **Unrestricted**.

   .. image:: image/Social/social_5.png
      :scale: 40%
      :align: center

4. Confirm **Unrestricted** is selected so Android does not limit the app.

   .. image:: image/Social/social_7.png
      :scale: 40%
      :align: center

.. tip::
   These settings help prevent Android from stopping the app in the background, which can interrupt data collection.

.. _jtrack-social-ios:

iOS - Install & Join the Study
==============================

1. Open the **App Store** on your iPhone.
2. Search for **JTrack Social** and install it.
3. Open **JTrack Social** and tap **Join study**.
4. Allow **Camera** access when prompted so the app can scan your study QR code.
5. Scan the **QR code** provided by your study team.
6. Allow any additional study-related permissions requested by the app.

.. note::
   The exact permission and system-setting screens can differ across iOS versions. Follow the in-app instructions shown on your device.

Permissions by Sensor
=====================

JTrack Social only requests permissions for the modules enabled in your study. The screenshots below show Android examples; iOS permission prompts may look different.

Audio Sensor
------------

- Allows the app to record microphone input when audio collection is enabled in the study.
- On some devices, the app may also request storage or media access so recordings can be saved locally before upload.

1. Allow **Microphone** access.

   .. image:: image/Social/social_8.png
      :scale: 40%
      :align: center

2. If requested, allow **File/Storage** access so recordings can be saved.

   .. image:: image/Social/social_9.png
      :scale: 40%
      :align: center

Location Sensor
---------------

- Enables location capture based on the study configuration.
- Location samples are transformed before storage so the participant's actual location cannot be reconstructed directly from the stored coordinates.

Allow the location permission when prompted.

.. image:: image/Social/social_10.png
   :scale: 40%
   :align: center

Application Usage Sensor
------------------------

- Collects app usage statistics, such as which apps are used and for how long.
- On Android, this usually requires enabling **Usage access** manually.

To enable it on Android:

1. Open **Usage access** settings.
2. Select **JTrack Social**.
3. Enable the permission.

.. image:: image/Social/social_11.png
   :scale: 15%
   :align: center

.. note::
   This module does **not** collect message contents, typed text, or other in-app content. It records general usage patterns only.

Activity Recognition Sensor
---------------------------

- Detects basic physical activity states such as walking, running, or stillness.
- Depending on the phone, the permission may appear as **Activity recognition** or another motion-related system prompt.

Allow **Activity recognition** when prompted.

.. image:: image/Social/social_12.png
   :scale: 40%
   :align: center

What JTrack Social Records
==========================

The exact data collected depends on the study configuration. Common JTrack Social modules record the following types of information:

Location
--------

- Relative, anonymized GPS coordinates and timestamps.
- These data can be used to estimate mobility patterns such as time spent at places, distance covered, and changes in daily routines.

Application Usage
-----------------

- The app name or app category, together with timestamps and foreground usage duration.
- This is used to measure general usage patterns, not the content inside apps.

Activity Recognition
--------------------

- Motion-state labels reported by the phone, such as walking, running, still, cycling, or being in a vehicle, depending on device support.
- The app records the recognized state and when it changed.

Accelerometer
-------------

- Raw movement values on the x, y, and z axes.
- These samples describe how the phone moves in space and are commonly used for activity recognition and active labeling analyses.

Gyroscope
---------

- Raw rotation-rate values on the x, y, and z axes.
- These samples describe turning and orientation changes of the phone.

Pedometer
---------

- Step counts over time.
- This can be used to summarize walking activity or daily movement volume.

Lock and Unlock Events
----------------------

- Screen lock and unlock events, and on some devices the time spent in each state.
- These events help describe phone availability and interaction patterns.

Audio
-----

- If the study enables audio capture, the app can record microphone input during defined periods or active-labeling tasks.
- Audio collection is study-specific and should always be described in the study consent materials.

.. note::
   Not every study enables every module. JTrack Social only records the sensors and permissions configured for that study.

Garmin Pairing and Sync
=======================

If your study uses a Garmin wearable, pairing and syncing are handled directly inside **JTrack Social**.
For participants, the main steps are:

1. Charge the Garmin device and turn it on.
2. Enable **Bluetooth** on your phone.
3. Open the Garmin pairing flow inside **JTrack Social** and follow the on-screen prompts.
4. Wait for the first sync to finish before starting normal study participation.
5. Keep the watch worn, charged, and within Bluetooth range of the phone.

.. tip::
   If syncing seems delayed, first check that Bluetooth is enabled, the watch battery is not low, and JTrack Social is allowed to run in the background on the phone.

Detailed Garmin Guide
---------------------

For full Garmin setup, pairing, dashboard configuration, syncing, and troubleshooting steps, see :doc:`Garmin Integration <Garmin_Integration>`.

.. _sensor-comparison:

Sensor Data in Comparison between iOS and Android
=================================================

The overview above explains the sensor modules in plain language. The comparison below is intended for more technical readers who need platform-specific units, resolutions, and implementation details.

+-------------------+-----------------------------+-------------------------------+-----------------------------------------------+------------------------------------------------+---------------------------------------------------------------------------------------------------------------+
| Sensor            | Unit (iOS)                  | Unit (Android)                | Resolution (iOS)                              | Resolution (Android)                           | Notes                                                                                                         |
+===================+=============================+===============================+===============================================+================================================+===============================================================================================================+
| Accelerometer     | (x, y, z) in m/(s*s)        | (x, y, z) in m/(s*s)          | up to 100 Hz                                  | up to 100 Hz                                   | battery draining, recommended only for Active Labeling tasks                                                  |
+-------------------+-----------------------------+-------------------------------+-----------------------------------------------+------------------------------------------------+---------------------------------------------------------------------------------------------------------------+
| Gyroscope         | (x, y, z) in m/(s*s)        | (x, y, z) in m/(s*s)          | up to 100 Hz                                  | up to 100 Hz                                   | Rotation rate data, battery draining, recommended only for Active Labeling tasks                              |
+-------------------+-----------------------------+-------------------------------+-----------------------------------------------+------------------------------------------------+---------------------------------------------------------------------------------------------------------------+
| Activity          | Movement state as numerical | Movement state as numerical   | as the state changes with a minimum of        | as the state changes, Android itself defines   |                                                                                                               |
|                   | value                       | value                         | 5 seconds for a state value                   | the interval                                   |                                                                                                               |
+-------------------+-----------------------------+-------------------------------+-----------------------------------------------+------------------------------------------------+---------------------------------------------------------------------------------------------------------------+
| Application Usage | seconds of an App in        | ms of an App in Foreground    | 15 minute time intervals starting at          | dynamic time intervals starting at midnight    | iOS: category of app for non-Apple apps and name of app for Apple apps; Android: always app name and category |
|                   | foreground                  |                               | midnight for each day                         | for each day                                   |                                                                                                               |
+-------------------+-----------------------------+-------------------------------+-----------------------------------------------+------------------------------------------------+---------------------------------------------------------------------------------------------------------------+
| Lock/Unlock       | number of screen locks/wakes| every lock/unlock as event    | 15 minute time intervals starting at          | live events as lock/unlock is triggered        |                                                                                                               |
|                   | in time interval plus amount| with value "lock" or "unlock" | midnight for each day                         |                                                |                                                                                                               |
|                   | of time in each state       |                               |                                               |                                                |                                                                                                               |
+-------------------+-----------------------------+-------------------------------+-----------------------------------------------+------------------------------------------------+---------------------------------------------------------------------------------------------------------------+
| Pedometer         | number of steps in a given  | number of steps in a given    | dynamic                                       | dynamic                                        |                                                                                                               |
|                   | interval                    | interval                      |                                               |                                                |                                                                                                               |
+-------------------+-----------------------------+-------------------------------+-----------------------------------------------+------------------------------------------------+---------------------------------------------------------------------------------------------------------------+

.. _active-labeling-ios:

Active Labeling
===============

Active Labeling allows study participants to perform predefined tasks while sensor data is recorded in the background. This enables precise labeling of sensor data with task context, which is valuable for data analysis, activity recognition, and model training.

What It Is
----------

Active Labeling is a task-based sensor recording mode where participants are instructed to perform a specific activity or task, such as walking, standing, or brushing teeth. During the task:

- Sensors such as accelerometer, gyroscope, activity recognition, and audio, if enabled, can record data.
- The task name and duration are linked to the recorded sensor data.
- Data is saved and can be uploaded for later analysis after the task ends.

The goal is to associate sensor data with a clearly defined ground-truth label, such as ``Brushing Teeth``. Inside JTrack Social, Active Labeling is accessible from the main view if configured in :ref:`JDash <conf-active-labeling>`.

Participant Flow
----------------

Participants can:

1. Select a predefined task using autocomplete or enter one manually.
2. Review the task instructions.
3. Adjust the duration if needed.
4. Start the task.
5. Wait through the short countdown before data recording begins.
6. Perform the task while the selected sensors run in the background.
7. Let the task stop automatically or stop it manually.

The app logs:

- Task name
- Timestamp
- Duration
- Sensor data during the session

Recorded Data
-------------

Each Active Labeling session results in:

- A ``labeling event`` with ``taskname``, ``startTimestamp``, ``endTimestamp``, and ``duration``
- Sensor data, such as accelerometer and gyroscope samples, tagged with the task name
- An optional audio file that can be zipped and uploaded
- A corresponding database entry such as ``ActiveLabelingSensor``, ``ActiveLabelingSession``, or ``ActiveLabelingTasks``

.. important::
   The task name is included as a label in every recorded sensor sample. This supports supervised learning and later analysis.

Data Upload
-----------

After the task finishes:

- Sensor data is saved locally.
- If the device is online and the server is reachable, the data is uploaded to the study backend.
- If audio recording is enabled, the audio file is zipped and transmitted as part of the upload.
- After successful upload, local files are deleted to save space.

.. note::
   Data is only uploaded if ``JTrack_serverOnline`` and ``JTrack_connected`` are both ``true``.

Best Practices
--------------

- Use short, descriptive task names such as ``Walking Indoors`` or ``Typing``.
- Keep task durations consistent across participants.
- Include preparation time so participants can get ready before recording starts.
- Avoid tasks with overlapping or ambiguous names.
- Ensure all required sensor permissions are granted on participant devices.

General Troubleshooting
-----------------------

If tasks do not start:

- Check whether ``JTrack_activeLabelingEnabled`` is set to ``1`` or ``2``.
- Ensure the task-list JSON is well-formed and downloaded successfully.
- Verify that sensor permissions such as motion or microphone access are granted.
- On iOS, ensure required background behavior is allowed by the device settings.

Navigating the UI
-----------------

Use *Active Labeling* to mark what you are doing in real time. This helps the study link sensor data with the correct activity.

Overview
~~~~~~~~

- The home screen shows **Recently completed activities** and the large **Play/Stop** control.
- Use **+** to pick or create an activity, or **>** to load the next scheduled one.
- Some tasks display a short instruction and a preparation countdown before starting.

Step-by-Step
~~~~~~~~~~~~

1) Open the Activity Screen
^^^^^^^^^^^^^^^^^^^^^^^^^^^

You will see your recent tasks and the main control.

.. image:: image/Social/active_label_01.png
   :scale: 40%
   :align: center
   :alt: JTrack Social home screen with recent activities and Play button

2) Add or Select an Activity
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Tap the **+** button to add or select a task. In the **New Activity** dialog:

- **Enter activity**: type the activity name, for example *task 1*
- **Duration in seconds (optional)**: set a fixed length if your study requires it, otherwise leave it empty
- **Record Audio**: enable this only if your study instructs you to capture audio

Tap **Add**.

.. image:: image/Social/active_label_02.png
   :scale: 40%
   :align: center
   :alt: New Activity dialog with fields for name, optional duration, and audio toggle

As you type, suggestions may appear. Tap one to select it.

.. image:: image/Social/active_label_03.png
   :scale: 40%
   :align: center
   :alt: Activity name suggestions appearing under the text field

3) Read the Task Instruction
^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Some studies display a brief instruction popup for the selected task. Tap **OK** to continue.

.. image:: image/Social/active_label_04.png
   :scale: 40%
   :align: center
   :alt: Instruction dialog for the selected task

4) Wait for the Preparation Countdown
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If your study uses a preparation phase, you will see a countdown. The task starts automatically when the countdown, and any beeps, finish.

.. image:: image/Social/active_label_05.png
   :scale: 40%
   :align: center
   :alt: Preparation countdown dialog before task begins

5) Start and Stop the Task
^^^^^^^^^^^^^^^^^^^^^^^^^^

- Press the **Play** button to start. The timer and progress bar will run.
- Press the **Stop** button to end the task.
- When finished, the task appears under **Recently completed activities** with a timestamp.

Notes and Tips
~~~~~~~~~~~~~~

- Notifications such as **Main service started** or **Acceleration service started** confirm that background sensors are running.
- If you enabled **Record Audio**, Android may show a temporary green microphone indicator while recording.
- If you entered a fixed duration, the task ends automatically when the timer completes.
- To repeat a task, either use **>** to load the next task or tap **+** to choose the activity again.

UI Troubleshooting
~~~~~~~~~~~~~~~~~~

- **Cannot find the + button**: Scroll slightly if the Play button covers screen elements on small displays.
- **No suggestions appear**: Type the full name or create the activity once so future entries can suggest it.
- **Audio toggle missing**: Your study may not require audio. Follow only the options shown in your app.
