import flet as ft

from hydenv.database import HydenvDatabase

def homePage(page: ft.Page):
    # add a navigation bar
    page.appbar = ft.AppBar(
        leading=ft.Icon(ft.icons.DRAFTS_ROUNDED),
        leading_width=40,
        title=ft.Text("Hydenv Database tool"),
        center_title=False
    )
    
    # connection tool
    def connect_view():
        controls = []
        form = ft.GridView(runs_count=2, run_spacing=5)
        controls.append(ft.TextField(label="host", value="hydenv.hydrocode.de"))
        controls.append(ft.TextField(label="Port", value=5432, keyboard_type=ft.KeyboardType.NUMBER))
        form.controls = controls

        page.add(form)
        page.update()

        return controls
    
    # check if the database is there
    _con = page.client_storage.get('connection')
    if _con is None:
        controls = connect_view()
        def on_connect()
        submit = ft.ElevatedButton(text="Connect")


    else:
        page.add(ft.Text('Found connection'))
    
    # general settings
    page.title = "Hydenv database"
    page.update()



def run(port=4242):
    ft.app(target=homePage, port=port, route_url_strategy='path')


if __name__ == '__main__':
    import fire
    fire.Fire(run)