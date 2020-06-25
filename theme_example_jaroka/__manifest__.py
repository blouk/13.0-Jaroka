{
    'name': 'Jaroka Theme Example',
    'description': 'Jaroka Theme Example',
    'category': 'Theme/Example',
    'summary': 'Jaroka Theme Example',
    'version': '0.1',
    'depends': ['website', 'website_theme_install', 'website_sale', ],
    'data': [

        #data
        'data/menu.xml',

        'views/assets.xml',

        #pages
        'views/pages/homepage.xml',
        'views/pages/a_page.xml',
    ],
    'images': [
        'static/description/jaroka_description.png',
        'static/description/jaroka_screenshot.jpg',
    ],

        'installable': True,


}
