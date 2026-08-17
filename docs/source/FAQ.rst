==========================
Frequently Asked Questions
==========================

Which JTrack app should I use?
==============================

Use :doc:`JTrack Social <Social>` for smartphone and wearable sensing, and :doc:`JTrack EMA+ <EMA>` for questionnaires and ecological momentary assessments. A study may use either app or both. Researchers configure both through :doc:`JDash <JTrack_Dashboard>`.

Which operating systems are supported?
======================================

The current minimum versions are:

* **JTrack Social:** iOS 16 or later and Android 14 or later.
* **JTrack EMA+:** iOS 16 or later and Android 12 or later.

JTrack Social 2.47 was the final release supporting iOS 15. For new studies, use devices that can run a currently supported operating-system version and keep both the phone and app updated.

Which smartphone sensors are supported?
=======================================

JTrack Social can support location, activity recognition, pedometer data, app usage, lock/unlock information, derived movement features, Apple Health data, and study-configured audio. Raw accelerometer and gyroscope data are available only during **Active Labeling**, not for passive monitoring.

The exact selection is study-specific, and availability differs between Android and iOS. See :ref:`What JTrack Social Records <social-sensors>` and the :ref:`platform comparison <sensor-comparison>`.

Which wearables are supported?
==============================

JTrack currently integrates:

* compatible **Garmin** devices through the Garmin Health Standard SDK

Garmin signal availability depends on the exact device, firmware, SDK support, and license. The vívoactive 6 is the Garmin model currently used and validated by the JTrack team. See :ref:`Recommended Garmin Devices <recommended-garmin-devices>` before purchasing watches for a study.

How do I get a JTrack account?
==============================

Contact the JTrack team at `biomarkers.inm7@gmail.com <mailto:biomarkers.inm7@gmail.com>`_. Accounts are created for approved research collaborations; there is no public self-registration for JDash.

How do I get started with a new study?
======================================

Contact the team to arrange an **onboarding meeting**. During onboarding, we discuss the research question, required apps and sensors, study duration, participant workflow, consent and data-protection requirements, JDash configuration, test devices, and the validation plan. A pilot study should be completed before production enrollment.

Where can I ask additional questions?
=====================================

Use the recurring **JTrack Hours Zoom Room** to discuss study design, configuration, technical questions, or troubleshooting with the team. Contact us at `biomarkers.inm7@gmail.com <mailto:biomarkers.inm7@gmail.com>`_ to receive the current meeting details.

Does every study collect the same data?
=======================================

No. The study configuration controls which sensors, wearable signals, Active Labeling tasks, surveys, and permissions are enabled. JTrack Social records only the configured modules. See :ref:`What JTrack Social Records <social-sensors>` for examples.

Which permissions does JTrack require?
======================================

Enrollment requires camera access to scan the study QR code. Depending on the
study, JTrack Social may additionally request location, motion/physical activity,
microphone, notifications, Bluetooth, Apple Health, Android usage access, or iOS
SensorKit access. JTrack EMA+ may request notifications, calendar, camera, or
media access for configured questionnaire features. A granted permission does
not activate a sensor that is disabled in the study configuration. See
:ref:`Application Permissions <application-permissions>` for the complete table
and :ref:`Permissions by Sensor <social-permissions>` for setup instructions.

Should a study be tested before enrollment?
===========================================

Yes. Create a pilot study in JDash and test enrollment, permissions, background behavior, sensor data, Active Labeling or EMA schedules, wearable synchronization, server uploads, and study completion on the actual phone and watch models planned for participants. Use the :ref:`JTrack Social administrator tools <social-admin-tools>` and JDash compliance views during validation.

Should participants keep JTrack open?
=====================================

The app does not need to remain visible, but participants should avoid force-closing it and should open it regularly so pending collection and synchronization can run. Platform-specific recommendations are listed under :doc:`Compliance Optimization <Compliance_Optimization>`.

Why are calendar events important for EMA?
==========================================

Calendar events provide an additional reminder channel for scheduled questionnaires. They complement app notifications and can improve response compliance. See :ref:`Compliance Optimization for JTrack EMA+ <compliance-ema>`.

Does Garmin require Garmin Connect or a personal account?
==========================================================

No. JTrack Social communicates directly with supported Garmin watches through the Garmin Health Standard SDK. Device support, available signals, and high-frequency access still depend on the watch, firmware, SDK, and license. See :doc:`Garmin Integration <Garmin_Integration>`.

What should I do before reporting a problem?
=============================================

Update the app and phone, restart the device, and verify the study permissions and background settings. Do not uninstall unless instructed by the study team. Follow the complete :ref:`Before Contacting Us <before-contacting-us>` checklist and include the Study ID first in the report.

How can researchers inspect or export data?
===========================================

Use :doc:`JDash <JTrack_Dashboard>` for study monitoring and exports. The record formats and export concepts are described in :doc:`Data Storage <developers>`.
