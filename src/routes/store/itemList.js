/* import { connect } from 'react-redux';
import { toggleItem } from '../../actions';
import Store from './Store';

const getItemList = (item, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (state) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  });

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  });

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList;
*/
