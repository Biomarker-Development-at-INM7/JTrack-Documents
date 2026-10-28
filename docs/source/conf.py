# Configuration file for the Sphinx documentation builder.
#
# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'JTrack'
copyright = '2026, INM-7'
author = 'Mamaka Narava, Mehran Turna & Jona M. Fischer'

# The full version, including alpha/beta/rc tags
release = '2.3 (10/26)'

master_doc = 'index'
PYTHONUTF8 = 1
# -- General configuration ---------------------------------------------------

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = [
    'sphinx.ext.autodoc'
]

# Add any paths that contain templates here, relative to this directory.
templates_path = ['_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = []


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#

html_theme = "furo"
html_show_sourcelink = False
html_context = {
    "repo_url": "https://github.com/Biomarker-Development-at-INM7",
    "repo_description": "Explore JTrack code, issues, and other details on GitHub.",
}

# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".
html_static_path = ['_static']
html_css_files = [
    'custom.css',
]
html_js_files = ['collapsible-toc.js', 'search-context-data.js', 'search-context.js']

html_sidebars = {
    "**": [
        "sidebar/brand.html",
        "sidebar/search.html",
        "sidebar/navigation.html",
        "sidebar/repo.html",
        "sidebar/ethical-ads.html",
        "footer.html",
    ]
}

# Store plain-text context in a script so search excerpts also work on file://.
def build_search_context(app, exception):
    if exception is not None or app.builder.format != 'html':
        return
    import json
    from pathlib import Path
    from docutils import nodes

    data = {}
    for docname in sorted(app.env.found_docs):
        tree = app.env.get_doctree(docname).deepcopy()
        for node in list(tree.findall(lambda node: isinstance(node, (nodes.raw, nodes.comment)))):
            node.parent.remove(node)
        sections = {'': tree.astext()}
        for section in tree.findall(nodes.section):
            for anchor in section.get('ids', []):
                sections[anchor] = section.astext()
        data[docname] = sections
    output = Path(app.outdir) / '_static' / 'search-context-data.js'
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text('window.JTRACK_SEARCH_CONTEXT = '
                      + json.dumps(data, ensure_ascii=True) + ';\n', encoding='utf-8')


def setup(app):
    app.connect('build-finished', build_search_context)
