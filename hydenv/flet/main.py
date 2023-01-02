import flet as ft
import logging

from .home import homePage


def main(page: ft.Page):
    # define the handler
    def route_change(route: str):
        logging.info(route)
        # set the default route
        if route == '' or route == '/':
            route = '/home'
        
        # switch the route
        if page.route == '/home':
            page.clean()
            homePage(page)

    # register the route handler
    page.on_route_change = route_change

def run(port=4242):
    ft.app(target=main, port=port, route_url_strategy='path')


if __name__ == '__main__':
    import fire
    fire.Fire(run)
