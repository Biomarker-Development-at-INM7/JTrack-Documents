=======================
Compliance Optimization
=======================

Reliable participation depends not only on the study configuration, but also on a few phone settings and participant habits. Study teams should explain the following instructions during enrollment and repeat them when compliance decreases.

Important Instructions
======================

.. _compliance-social:

For JTrack Social
-----------------

Keep the App Available in the Background
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

JTrack Social performs passive collection, delayed SensorKit retrieval (only on iOS), synchronization, and uploads while participants use their phones normally. Participants do not need to keep the app visible, but they should:

* keep JTrack Social installed and avoid force-closing it from the recent-apps view;
* open the app regularly, preferably once per day, so pending data and wearable synchronizations can be processed;
* allow notifications, motion/activity, Bluetooth, location, and other permissions requested for the study;
* keep **Background App Refresh** enabled on iOS; and
* set battery use to **Unrestricted** and disable automatic permission removal for JTrack Social on Android.

When a Garmin wearable is used, Bluetooth should remain enabled and the watch should stay charged and near the phone. Opening JTrack Social also triggers a foreground wearable synchronization.

.. important::
   Swiping JTrack Social away or applying aggressive battery restrictions can delay background collection and synchronization. iOS and Android ultimately decide when background work may run, so opening the app regularly is the most reliable way to process pending data.

.. _compliance-ema:

For JTrack EMA+
---------------

Use Calendar Events for Scheduled EMA Prompts
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Calendar events are an important additional reminder channel for time-sensitive EMA surveys. When JTrack EMA+ offers to add an event, participants should select a calendar and confirm **Add Event**.

For reliable reminders, participants should:

* grant calendar and notification permissions;
* keep notifications enabled for both JTrack EMA+ and the selected calendar app;
* verify that Focus or Do Not Disturb settings do not silence study reminders; and
* avoid deleting study events from the calendar while participation is ongoing.

.. note::
   Calendar events complement JTrack notifications; they do not submit a questionnaire automatically. Participants must still open JTrack EMA+ and complete the survey within the configured time window.

For installation and daily use, see :doc:`JTrack Social <Social>` and :doc:`JTrack EMA+ <EMA>`. If these checks do not resolve a problem, continue with :ref:`the troubleshooting checklist <before-contacting-us>`.
