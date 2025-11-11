
import { useState } from "react"
import { useShop } from "../context/ShopContext"
import ProductItem from "../components/ProductItem"
import Title from "../components/Title"
import Footer from "../components/Footer"
import { CgClose } from "react-icons/cg"
import { BsFilter } from "react-icons/bs"
import { BiSearch, BiChevronDown } from "react-icons/bi"

interface Props {
    status: string;
    onClickClose: () => void;
}

function Collection({ status, onClickClose }: Props) {

    const items = useShop();
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [sortBy, setSortBy] = useState('featured')

    const categories = ['Men', 'Women', 'Kids']
    const types = ['Topwear', 'Bottomwear', 'Winterwear']

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c == category)
                : [...prev, category]
        )
    }

    const toggleType = (type: string) => {
        setSelectedTypes(prev =>
            prev.includes(type)
                ? prev.filter(t => t !== type)
                : [...prev, type]
        )
    }

    const clearFilters = () => {
        setSelectedCategories([])
        setSelectedTypes([])
        setSearchText('')
    }
    
    const filteredProducts = items?.products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchText.toLowerCase())
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
        const matchesType = selectedTypes.length === 0 || selectedTypes.some(type => 
            product.subCategory?.toLowerCase().includes(type.toLowerCase())
        )
        
        return matchesSearch && matchesCategory && matchesType
    }) || []

    const hasActiveFilters = selectedCategories.length > 0 || selectedTypes.length > 0 || searchText

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* Search Bar */}
            <div className={`
                fixed top-20 left-0 right-0 bg-white border-b border-gray-200 z-40 transition-all duration-300
                ${status === 'block' ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}
            `}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        {/* Search Input */}
                        <div className="flex-1 max-w-2xl mx-auto">
                            <div className="relative">
                                <BiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <input
                                    type="text"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    placeholder="Search products..."
                                    className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                                    autoFocus
                                />
                                {searchText && (
                                    <button
                                        onClick={() => setSearchText('')}
                                        className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        <CgClose size={20} />
                                    </button>
                                )}
                                <button
                                    onClick={() => {
                                        onClickClose()
                                        setSearchText('')
                                    }}
                                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <CgClose size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content - Adjust padding based on search state */}
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
                status === 'block' ? 'pt-40' : 'pt-24'
            }`}>
                {/* Header */}
                <div className="text-center mb-8">
                    <Title text1="ALL" text2="COLLECTIONS" />
                    <p className="text-gray-600 mt-2">Discover our complete range of premium products</p>
                </div>

                {/* Toolbar */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                    {/* Results Count */}
                    <div className="text-gray-600">
                        Showing {filteredProducts.length} products
                        {hasActiveFilters && (
                            <button
                                onClick={clearFilters}
                                className="ml-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                                Clear all filters
                            </button>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-4">
                        {/* Sort */}
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="name">Name: A to Z</option>
                                <option value="newest">Newest First</option>
                            </select>
                            <BiChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                        </div>

                        {/* Filter Toggle */}
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 hover:border-gray-400 transition-colors"
                        >
                            <BsFilter size={18} />
                            <span>Filters</span>
                            {hasActiveFilters && (
                                <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                                    {selectedCategories.length + selectedTypes.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Main Grid */}
                <div className="flex gap-8">
                    {/* Filters Sidebar */}
                    <div className={`
                        ${isFilterOpen ? 'block' : 'hidden'} 
                        lg:block w-full lg:w-80 shrink-0
                    `}>
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6 sticky top-32">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
                                <button
                                    onClick={() => setIsFilterOpen(false)}
                                    className="lg:hidden text-gray-400 hover:text-gray-600"
                                >
                                    <CgClose size={20} />
                                </button>
                            </div>

                            {/* Categories */}
                            <div>
                                <h4 className="font-medium text-gray-900 mb-3">Categories</h4>
                                <div className="space-y-2">
                                    {categories.map(category => (
                                        <label key={category} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedCategories.includes(category)}
                                                onChange={() => toggleCategory(category)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                                {category}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Types */}
                            <div>
                                <h4 className="font-medium text-gray-900 mb-3">Product Type</h4>
                                <div className="space-y-2">
                                    {types.map(type => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={selectedTypes.includes(type)}
                                                onChange={() => toggleType(type)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                                                {type}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Active Filters */}
                            {(selectedCategories.length > 0 || selectedTypes.length > 0) && (
                                <div className="pt-4 border-t border-gray-200">
                                    <button
                                        onClick={clearFilters}
                                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors font-medium"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {filteredProducts.length === 0 ? (
                            <div className="text-center py-16">
                                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                                <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
                                <button
                                    onClick={clearFilters}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-3 max-sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                                {filteredProducts.map((product) => (
                                    <ProductItem
                                        key={product._id}
                                        name={product.name}
                                        price={product.price}
                                        productId={product._id}
                                        imgURL={product.image}
                                        category={product.category}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Collection