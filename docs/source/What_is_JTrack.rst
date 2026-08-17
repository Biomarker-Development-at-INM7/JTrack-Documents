=========================================================================================================
What is JTrack?
=========================================================================================================

A Collaborative Tool for Passive Monitoring and Ecological Momentary Assessments

Scope of Application
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The JTrack platform consists of the :doc:`JDash web dashboard <JTrack_Dashboard>`, the :doc:`JTrack EMA+ <EMA>` and :doc:`JTrack Social <Social>` mobile applications, and server infrastructure for central study data collection.

The platform was developed to gather study-specific digital phenotyping information, including :ref:`sensor data <sensor-data>` and participants' :ref:`self-reports <ema-data>` about events or activities in daily life.

JTrack was designed as an open-source collaboration tool to enable clinical and behavioral researchers to collect their own digital phenotyping data from study populations.

The :doc:`JTrack Social <Social>` application collects study-configured sensor data from smartphones and supported wearables, together with supported smartphone-usage summaries. Available modules and platform APIs differ between Android and iOS, but both apps use the same study-centered workflow and common JTrack data model.

Data minimization and privacy are central design goals. JTrack uses pseudonymous study, participant, and device identifiers, and location data can be transformed into a relative coordinate system before storage. The applicable consent form and study protocol define which data are collected and how they may be used.

JTrack Social has two different modes that can be used selectively or in combination:

1. **Passive monitoring:** collects configured low-frequency or event-based data with minimal participant interaction.
2. **Active Labeling:** records configured sensors during a defined task and associates the samples with that task label. Raw accelerometer and gyroscope data are supported only in this mode.

The :doc:`JTrack EMA+ <EMA>` application collects questionnaire data in longitudinal studies. Researchers can configure surveys, schedules, conditional questions, media, and reminder workflows in JDash; responses are transferred with pseudonymous study identifiers.

Additionally, both apps may collect "derivative data", which is gathered automatically for technical purposes — such as sending push notifications, logging errors, or maintaining smooth app performance. This data is not stored permanently and does not include any user-identifying information.

Both apps collect study data only after enrollment and after the participant grants the required permissions. Installing an app without joining a study does not start study data collection. Only modules configured for the enrolled study should be enabled.

For practical settings that improve data completeness, see :doc:`Compliance Optimization <Compliance_Optimization>`.

.. _sensor-data:

Sensor Data
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

JTrack Social collects only the modules enabled in the enrolled study. The actual
data depend on the operating system, device capabilities, granted permissions,
and study configuration. Installing the app does not by itself activate every
module.

Depending on the study, JTrack Social can collect:

* relative location and mobility information;
* activity recognition and pedometer data;
* application usage and device lock/unlock summaries;
* high-frequency accelerometer and gyroscope data during Active Labeling;
* study-configured audio recordings;
* read-only Apple Health measurements;
* measurements from supported Garmin or Fitbit wearables; and
* technical metadata such as app and operating-system versions, phone model,
  synchronization status, and effective sensor states.

JTrack does not collect typed text, message content, or content viewed inside
other applications. Study data are associated with pseudonymous JTrack
identifiers. When configured, location coordinates are transformed into a
relative coordinate system on the device before stored.

See :ref:`What JTrack Social Records <social-sensors>` for descriptions of each
module and the :ref:`platform comparison <sensor-comparison>` for iOS and Android
differences. Wearable signals and device limitations are documented separately
under :doc:`Garmin Integration <Garmin_Integration>`.

Sample Data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*Curious about how this data would look like?* :ref:`Contact us <contact-us>` *to get a sample dataset.*

Technical record examples and export formats are available under :doc:`Data Storage <developers>`.

.. _ema-data:

Ecological Momentary Assessments
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Information collected in each study is outlined in the written informed consent and study protocol. Such information may include:

3.1 User-Generated Survey Data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Information provided by participants when completing surveys is stored with pseudonymous study identifiers and handled according to the study protocol and consent materials.

*Demographic and clinical data may be collected if specified by the study protocol. Access to this information is restricted to authorized study personnel only.*

3.2 Derivative Data
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Technical metadata such as app version, operating-system version, device model, effective sensor states, and diagnostic logs may be processed to operate the platform and troubleshoot study devices. Retention and access follow the applicable study and infrastructure policies.

.. _application-permissions:

Application Permissions
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

JTrack requests permissions in context: enrollment needs camera access, while
sensor permissions depend on the enrolled study. A permission allows the app to
use an operating-system API; it does not mean that every study collects the
corresponding data. Participants can review or revoke permissions in system
settings, although doing so can create missing study data.

Depending on the application and study configuration, JTrack may request access
to the camera, location, motion or physical activity, application-usage
summaries, SensorKit, microphone, Bluetooth, Apple Health, notifications,
calendar, or selected media and files. Permission names and availability differ
between Android and iOS.

Background operation also depends on system settings such as Android battery
optimization and iOS Background App Refresh. These settings are not permissions,
but disabling them can interrupt data collection or synchronization.

See :ref:`Permissions by Sensor <social-permissions>` for the JTrack Social
permission purposes and platform-specific setup instructions. EMA+ permissions
are described in :doc:`JTrack EMA+ <EMA>`, and the recommended background
settings are collected under :doc:`Compliance Optimization
<Compliance_Optimization>`.

Push Notifications
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

If required, we may request permission to send push notifications. Notifications can be:

- **Online notifications**, sent by our servers to deliver information.
- **Offline notifications**, generated by the app to inform users about new questions or operational status.

Data Usage
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

5.1 Intended Use of Collected Information
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

We may use information collected via JTrack applications to:

1. Conduct data analysis for internal purposes and publication (e.g., journals, conferences) as specified in study protocols.
2. Share anonymized data with other researchers (if covered by study protocols and informed consents).
3. Improve the efficiency and operation of the applications.
4. Resolve technical issues and troubleshoot problems.

5.2 Third-Party Data Sharing
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Personal information will **never** be shared with third-party applications or organizations. If covered by study protocol and informed consent, anonymized study data may be shared with other researchers.

5.3 Disclosure of Information
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Personal information is **never** shared with individuals not involved in the study. It will **never** be used to contact you for reasons unrelated to the study. Data you provide will **never** be sold or used for marketing or advertising. We may share anonymized data to address scientific questions or verify study results.

Data Security
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

To help secure information, we use administrative, technological, and physical safeguards.

All data transfers are protected via HTTPS. Additional checks (e.g., MD5 checksums) prevent errors and ensure integrity. Unique identifiers (e.g., user and device IDs) are generated randomly.

Any personally identifiable information is stored separately and never linked to user-generated data. All employees with access to study data are contractually obligated to maintain data security.

Study Participants
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Participants may request to leave a study according to its protocol. JTrack stops new sensor recording when the configured study duration is reached; on iOS, delayed SensorKit batches may still be retrieved for up to 48 hours before final verification. If a device is lost, participants should contact the study team.

If data collection is not anonymized and a participant leaves the study, they can request deletion of their data—unless the data have already been used in publications, in which case regulations require retention for up to 10 years (or as specified in the protocol).

Data Access
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Access to collected data is limited to qualified employees or researchers involved in the study. Access to personal information is limited to study personnel responsible for data collection.

All employees are contractually obligated to maintain data security and comply with this policy. They will never attempt to re-identify participants or contact them for purposes beyond the study protocol.
