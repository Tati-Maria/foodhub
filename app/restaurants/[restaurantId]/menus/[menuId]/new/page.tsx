import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { getMenu } from "@/app/actions/getMenu";
import CreateMenuItem from "@/app/components/forms/CreateMenuItem";
import NotFound from "@/app/components/ui/NotFound";
import Title from "@/app/components/ui/Title";

interface CreateMenuItemProps {
    menuId: string
    id: string
}

const CreateItem = async ({params}: {params: CreateMenuItemProps}) => {
    const menu = await getMenu(params);
    const user = await getCurrentUser();
    const id = menu?.restaurantId;
    const menuId = menu?.id;

    if(!menuId) return (
        <NotFound
        text="Menu Not Found" 
        />
    )

    if(user?.id !== menu.userId) return (
        <NotFound
        text="You are not the owner of this menu" 
        />
    )

  return (
    <section>
        <Title title={`Create Menu Item for ${menu?.name}`} />
        <CreateMenuItem
        id={menuId}
        menuId={id}
        />
    </section>
  )
}

export default CreateItem;