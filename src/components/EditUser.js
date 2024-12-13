const handleEdit = async (id, updatedData) => {
    await axios.put(`https://reqres.in/api/users/${id}`, updatedData);
    // Update state with edited user
  };


  const handleDelete = async (id) => {
    await axios.delete(`https://reqres.in/api/users/${id}`);
    setUsers(users.filter(user => user.id !== id));
  };
  