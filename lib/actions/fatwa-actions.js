// get fatwas based id
export const  fetchFatwasWithPagination = async (userId, page, limit) => {
    try {
      const response = await fetch(`http://localhost:5000/users/${userId}`);
      const userData = await response.json();
      const fatwas = userData.fatwas;
  
      // حدد الصفحات
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedFatwas = fatwas.slice(startIndex, endIndex);
  
      return {
        paginatedFatwas:paginatedFatwas,
        userData: userData
      };
    } catch (error) {
      console.error("Failed to fetch fatwas:", error);
      return [];
    }
  };