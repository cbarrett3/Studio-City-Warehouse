import { Tabs } from 'antd';
import TodoList from './TodoList';

const { TabPane } = Tabs;

export default function Planner() {
  return (
    <Tabs defaultActiveKey="thoughtlist">
      <TabPane tab="Thoughtlist" key="thoughtlist">
        <TodoList />
      </TabPane>
      <TabPane tab="Todo" key="todo">
        {/* Todo component goes here */}
      </TabPane>
      <TabPane tab="Doing" key="doing">
        {/* Doing component goes here */}
      </TabPane>
      <TabPane tab="Done" key="done">
        {/* Done component goes here */}
      </TabPane>
    </Tabs>
  );
}
