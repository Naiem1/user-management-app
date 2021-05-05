import GroupTable from "../../components/GroupTable";
import Header from "../../components/Header";

const GroupListPage = () => {
  return (
    <div>
      <Header
        title="Group lists"
        desc="here you can update and check specific groups"
      />
      <GroupTable/>
    </div>
  );
};

export default GroupListPage;