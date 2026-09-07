import ContactsItem from "@/components/Contacts/ContactsItem";

const ContactsItems = ({ items }) => {
	return (
		<ul className="contacts__items">
			{items && items.map((item, id) => (
				<ContactsItem key={id} {...item} />
			))}
		</ul>
	);
}

export default ContactsItems;