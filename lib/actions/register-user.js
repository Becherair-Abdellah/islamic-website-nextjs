// 'use client'
const BASE_URL = 'http://localhost:3000';
export async function registerUser(username, email, password) {
    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify({
                username : username,
                email:email,
                password:password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to register user');
        }

        const data = await response.json();
        console.log('User registered successfully:', data);
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
export async function registerAdmin(username, email, password) {
    try {
        const response = await fetch(`${BASE_URL}/auth/create_account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
          
            body: JSON.stringify({
                username : username,
                email:email,
                password:password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to register user');
        }

        const data = await response.json();
        console.log('User registered successfully:', data);
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
export async function LoginUser(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:password,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to register user');
        }

       

        const data = await response.json();
        console.log('User registered successfully:', data);
          // Set the token in a cookie
          if (data.token) {
            document.cookie = `token=${data.token}; path=/; secure=false; samesite=strict`;
        }
        return data;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
// from json server
export async function getUsers(page,limit) {
    try {
        const response = await fetch(`http://localhost:5000/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
  
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to register user');
        }

     

        const data = await response.json();
        console.log('Users here', data);
           // حدد الصفحات
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedUsers = data.slice(startIndex, endIndex);
        return paginatedUsers;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// from json server
export async function deleteUser(userId) {
    try {
        const response = await fetch(`http://localhost:5000/users/${userId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete the user');
        }

        const data = await response.json();
        console.log('User deleted:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage: Delete the user with ID 1
deleteUser(1);


export function logout() {
    // Remove the token cookie by setting its expiration date to a past date
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; samesite=strict';
}


