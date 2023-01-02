import flet as ft

def homePage(page: ft.Page):
    # add a navigation bar
    page.appbar = ft.AppBar(
        leading=ft.Icon(ft.icons.PALETTE),
        leading_width=40,
        title=ft.Text("Hydenv Database tool"),
        center_title=False
    )
    page.add(ft.Text('BODY'))