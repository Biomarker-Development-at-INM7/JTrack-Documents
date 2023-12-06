=====================
JDash - JTrack Dashboard
=====================

* JDash is a web app built with the Django framework combined with `Dash <https://dash.plotly.com>`_ for analysis purpose. 
* It provides several functionalities that are necessary for creating, viewing and closing studies currently initiated by clinical institutions and the `Biomarker Development Group <https://www.fz-juelich.de/inm/inm-7/DE/Forschung/Biomarkerentwicklung/artikel.html?nn=653672>`_.

Features
++++++++++++++++



Set up
++++++++++++++++

Environment
To use the starter, Python3 should be installed properly in the workstation. If you are not sure if Python is installed, please open a terminal and type python --version. Here is the full list with dependencies and tools required to build the app:

Python3 - the programming language used to code the app
GIT - used to clone the source code from the Github repository

Manual Build
++++++++++++++++

Download the code

.. code-block:: shell

   $ git clone https://github.com/Biomarker-Development-at-INM7/JTrack-dashboard.git
   $ cd JTrack-dashboard

Set Up for Unix, MacOS

Install modules via VENV

.. code-block:: shell

   $ virtualenv jdash
   $ source jdash/bin/activate
   $ pip3 install -r requirements.txt

Set Up Database

.. code-block:: shell

   $ python collect static
   $ python manage.py makemigrations
   $ python manage.py migrate

Start the app

.. code-block:: shell

   $ python manage.py runserver

At this point, the app runs at http://127.0.0.1:8000/.

Manage App Users

   By default, the starter is not provided with users. To access the private pages and the admin section (reserved for superusers) follow up the next sections.

   Create Superusers

   To access the admin section, Django requires superuser privilegies. Let's create a new superuser and access the admin section of the project:
.. code-block:: shell
   $ python manage.py createsuperuser

Once the superuser is successfully created, we can access the admin section:

http://localhost:8000/admin/

   Create Groups

      Administrator

      Investigator

      Viewer

   Create Users

      

Codebase structure

Deploy on Webserver

   
Usage
++++++++++++++++

* **(a)** Visit `https://jdash.inm7.de <https://jdash.inm7.de/>`_.
* **(b)** Enter your personal credentials into the login fields and press **'Login'**.

.. image:: image/dash_index.png
   :scale: 30 %
   :align: center


.. image:: image/dash_logged_in.png
   :scale: 30 %
   :align: center

Studies

   Create a new study


   * **(a)** Navigating to **Create Study** directs to an empty mask for creating a new study.

   .. image:: image/dash_create_empty.png
      :scale: 30 %
      :align: center
   |

   View an ongoing study



   * **(a)** Selecting a study results in displaying all relevant information (general information, sent data information) and the options to send push notifications, to remove users from the study manually and to download participant sheets.

   .. image:: image/dash_display_study.png
      :scale: 30 %
      :align: center

   |


   Close an ongoing study


   * **(a)** Navigating to **Close Study** directs to an empty dropdown list containing all ongoing studies that can be closed.
   * **(b)** Selecting a study and pressing **'Close study'** below closes (i. e. moves it to the archive) the study (*Confirmation needed*).

   .. image:: image/dash_send_notification.png
      :scale: 30 %
      :align: center



   Other Features

   .. important:: Click **'Refresh'** to refresh the data to view current status of subjects/sensors.
   .. important:: Click **'Download unused study sheets'** to download participant sheets that were not used yet.
   .. important:: Click **'Download Data'** to download study data.
   .. important:: Click **'Delete Subjects'** to delete subject data from the study and server.

   .. image:: image/dash_send_notification.png
      :scale: 30 %
      :align: center

   .. important:: In **Push notifications** section fill out title, message and reveicer list in order to send a notification to chosen receivers.

   .. image:: image/dash_send_notification.png
      :scale: 30 %
      :align: center



Subjects

   Create/Remove  subjects
   .. important:: In **Remove user** section select an user to remove him/her from the study (*Confirmation needed*).

      .. image:: image/dash_create_remove_subjects.png
      :scale: 30 %
      :align: center

Survey


