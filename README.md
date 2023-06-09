# Frontend Developer Assignment
<img src="./screen/desktopView.jpeg" alt="desktop" />

## Get Started
### Installation

1. **_Clone the repository_**

```sh
git clone https://github.com/nour-aldin/modern_bank.git
```

2. **_Navigate to repository directory_**

```sh
$ cd frontend-assignment
```

3. **_Install dependencies_**

```sh
$ npm install
```

### Running

1. **_Compile and hot-reload for development_**

```sh
$ npm run dev
```

2. **_Compile, prefix and minify for production_**

```sh
$ npm run build
```

---

## 💻 Built With

- **React**
- **CSS**
- **tailwindcss**

---

## Design Choices

- Overlay for background image design
- Most of elements organized using flexbox 
- Component-based approach: The code is structured using React components. The NavBar component encapsulates the navigation bar functionality and rendering.

- State management: The code uses the useState hook to manage state within the NavBar component. It maintains the __user__ state to represent the __user data__ and the __isMenuOpen__ state to track the state of the menu toggle.

- Data fetching with useEffect: The useEffect hook is utilized to fetch data from an API endpoint. It triggers the data retrieval when the component mounts by passing an empty dependency array ([]) as the second argument. This ensures that the effect runs only once.

- Conditional rendering: The code utilizes conditional rendering to handle the loading state. If the user state is null (indicating data is still being fetched), __it renders a loading message.__ Once the user state is populated, the navigation bar is rendered with the user's data.


- Dynamic data rendering: The code dynamically renders the navigation links using an array of strings (links). This approach allows for flexibility in adding or modifying the navigation links without modifying the code structure.

- Styling: The code uses Tailwind CSS classes for styling the navigation bar. The classes are applied to the HTML elements to achieve the desired visual presentation.


