=========================================================================================================
Partners & Collaborations
=========================================================================================================

JTrack and JDash are developed in collaboration with academic and clinical partners in the field of digital health, behavioral monitoring, and biomedical research.

For collaboration enquiries and information about using JTrack in a study, see :ref:`Contact Us <contact-us>`.

.. raw:: html

   <style>
   .partners-grid {
       display: grid;
       grid-template-columns: repeat(2, minmax(280px, 1fr));
       gap: 30px;
       align-items: center;
       justify-items: center;
       margin-top: 30px;
       margin-bottom: 30px;
   }

   .partner-wide {
       grid-column: 1 / span 2;
   }

   .partner-card {
       background: white;
       padding: 20px;
       width: 100%;
       max-width: 520px;
       height: 160px;
       display: flex;
       align-items: center;
       justify-content: center;
       border-radius: 10px;
       box-sizing: border-box;
   }

   .partner-card img {
       max-height: 100px;
       max-width: 100%;
       width: auto;
       height: auto;
       object-fit: contain;
   }

   /* Fill more of the existing card with the SensorKit artwork. */
   .partner-card.sensorkit-card {
       padding: 8px;
   }

   .partner-card.sensorkit-card img {
       max-height: 144px;
       width: 100%;
       height: 100%;
   }

   @media (max-width: 900px) {
       .partners-grid {
           grid-template-columns: 1fr;
       }

       .partner-wide {
           grid-column: auto;
       }
   }

   .github-card {
       display: flex;
       align-items: center;
       gap: 16px;
       background: #f5f5f5;
       border: 1px solid #d0d0d0;
       border-radius: 14px;
       padding: 20px;
       max-width: 720px;
       margin: 0 auto;
       box-shadow: 0 0 0 1px rgba(0,0,0,.03);
   }

   .github-card svg {
       width: 48px;
       height: 48px;
       flex-shrink: 0;
       color: #24292f;
   }

   .github-card-content {
       flex: 1;
   }

   .github-card-title {
       margin: 0 0 0.25rem;
       font-size: 1.1rem;
       font-weight: 700;
   }

   .github-card-text {
       margin: 0;
       color: #444;
       line-height: 1.5;
   }

   .github-card-link {
       display: inline-block;
       margin-top: 0.75rem;
       color: #0969da;
       text-decoration: none;
       font-weight: 600;
   }

   .github-card-link:hover {
       text-decoration: underline;
   }
   </style>

   <div class="partners-grid">

      <!-- Apple SensorKit -->
      <a class="partner-card sensorkit-card"
         href="https://healthresearch.apple.com/resources/accessing-sensorkit-data/"
         target="_blank">
         <img src="_static/AppleSensorkit-centered.png" alt="Apple SensorKit">
      </a>

      <!-- Garmin -->
      <a class="partner-card"
         href="https://www.garmin.com/de-DE/"
         target="_blank">
         <img src="_static/Garmin_Health_Black.png">
      </a>

      <!-- Cologne -->
      <a class="partner-card"
         href="https://www.uk-koeln.de/"
         target="_blank">
         <img src="_static/ukkoeln.svg">
      </a>

      <!-- UKD full width -->
      <a class="partner-card"
         href="https://www.uniklinik-duesseldorf.de/"
         target="_blank">
         <img src="_static/ukd.svg">
      </a>

      <!-- Bonn -->
      <a class="partner-card"
         href="https://www.ukbonn.de/"
         target="_blank">
         <img src="_static/ukbonn.png">
      </a>

      <!-- Aachen -->
      <a class="partner-card"
         href="https://www.ukaachen.de/"
         target="_blank">
         <img src="_static/ukaachen.svg">
      </a>

   </div>


.. _sensorkit-publications:

Acknowledging SensorKit in Publications
++++++++++++++++++++++++++++++++++++++++

When publishing research that uses SensorKit data collected through JTrack
Social, acknowledge the use of **Apple SensorKit** and identify the relevant
data types in the methods section.

Before submitting a publication, check your institution's signed SensorKit
Addendum and study approval correspondence for any required acknowledgement
wording. Apple's public `SensorKit access guidance
<https://healthresearch.apple.com/resources/accessing-sensorkit-data/>`_ and
`research proposal materials
<https://healthresearch.apple.com/media/SensorKit-research-proposal.pdf>`_ describe
the approval process and agreements; we have not identified a standard
publication acknowledgement sentence in these public materials.

Suggested wording (not an Apple-prescribed statement):

    This study used Apple's SensorKit framework to collect [data types]
    through the JTrack Social app.

Adapt this sentence to the data actually used and any requirements in your
study's agreement. If the required wording is unclear, confirm it with your
institution's Apple Developer account holder or Apple SensorKit contact.


.. important::

   **Contact us before preparing your publication** if you would like help
   identifying the SensorKit acknowledgement requirements for your JTrack
   study. :ref:`Our team <contact-us>` can provide further details about the
   integration and help clarify which agreement requirements to check.

.. _garmin-publications:

Acknowledging Garmin in Publications
++++++++++++++++++++++++++++++++++++++++

Publications using Garmin data should identify the **device model** and
**Garmin Health Standard SDK** in the methods section. Check the applicable
Garmin agreement for additional attribution requirements.

Garmin's `API Brand Guidelines
<https://developer.garmin.com/downloads/brand/Garmin-Developer-API-Brand-Guidelines.pdf>`_
provide attribution rules for data displays, reports, exported visuals, and
derived results, including identification of Garmin and the device model.
Their applicability to a JTrack deployment must be checked against its signed
**Garmin Health Standard SDK agreement**. Do not assume that exceptions for
research using the Garmin Health API also apply to the Standard SDK.

Suggested methods wording (not a Garmin-prescribed statement):

    Wearable data were collected using Garmin [model] devices through the
    Garmin Health Standard SDK integrated into JTrack Social.

Adapt this sentence to the devices and data collection workflow actually used.
It does not replace any attribution required in figures, reports, or other
outputs by the applicable agreement.

.. important::

   **Contact us before preparing your publication** for more details about
   Garmin attribution in your JTrack study. :ref:`Our team <contact-us>` can
   explain the integration and help identify the relevant agreement and any
   requirements that need confirmation with Garmin Health.
