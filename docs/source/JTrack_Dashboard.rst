=====================
JTrack Dashboard
=====================

General
------------

* JTrack Dashboard is a web app built with the python framework `Dash <https://dash.plotly.com>`_ that is written on top of FLASK. 
* It provides several functionalities that are necessary for creating, viewing and closing studies currently initiated by clinical institutions and the `Biomarker Development Group <https://www.fz-juelich.de/inm/inm-7/DE/Forschung/Biomarkerentwicklung/artikel.html?nn=653672>`_.



How  to Use
-----------

* **(a)** Visit `https://jutrack.inm7.de <https://jutrack.inm7.de>`_.
* **(b)** Enter your personal credentials into the login fields and press **'Login'**.

.. image:: image/dash_index.png
   :scale: 30 %
   :align: center

* **(c)** After logging in the menu buttons are available for navigation.

.. image:: image/dash_logged_in.png
   :scale: 30 %
   :align: center

|

Create a new study
++++++++++++++++++

* **(a)** Navigating to **Create Study** directs to an empty mask for creating a new study.

.. image:: image/dash_create_empty.png
   :scale: 30 %
   :align: center


* **(b)** Before creating a new study (i. e. click **'Create study'** below) all **mandatory fields** have to be filled (*). Further, at least one modalitiy (*Ecological momentary assessment* or *Passive monitoring*) has to be selected.

.. image:: image/dash_create_checked.png
   :scale: 30 %
   :align: center

.. note:: Omitting (*) fields results in an error message.

|

View an ongoing study
+++++++++++++++++++++

* **(a)** Navigating to **Current Studies** directs to an empty dropdown list containing all ongoing studies.

.. image:: image/dash_display_empty.png
   :scale: 30 %
   :align: center

* **(b)** Selecting a study results in displaying all relevant information (general information, sent data information) and the options to send push notifications, to remove users from the study manually and to download participant sheets.

.. image:: image/dash_display_study.png
   :scale: 30 %
   :align: center

|

.. important:: Click **'Download unused study sheets'** to download participant sheets that were not used yet.
.. important:: In **Push notifications** section fill out title, message and reveicer list in order to send a notification to chosen receivers.
.. important:: In **Remove user** section select an user to remove him/her from the study (*Confirmation needed*).

|

Close an ongoing study
++++++++++++++++++++++

* **(a)** Navigating to **Close Study** directs to an empty dropdown list containing all ongoing studies that can be closed.

.. image:: image/dash_close_empty.png
   :scale: 30 %
   :align: center

* **(b)** Selecting a study and pressing **'Close study'** below closes (i. e. moves it to the archive) the study (*Confirmation needed*).






