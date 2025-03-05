<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="Description" :content="product.description" />
        </Head>
        
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = `https://fakestoreapi.com/products/${id}`

    // fetch product
    const { data: product } = await useFetch(uri, { key: id });

    if (!product.value) {
        throw createError({ 
            statusCode: 404, 
            statusMessage: 'Produuct not found',
            fatal: true
        })
    }

    // Another way of writing the fetch data stuff
    /*
    try {
        // fetch product
        const { data } = await useFetch(uri, { key: id });
        product = data.value;

        if (!product) {
            throw createError({ 
                statusCode: 404, 
                statusMessage: 'Product not found',
                fatal: true
            });
        }
    } catch (error) {
        console.error(error); 
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Something went wrong',
            fatal: true
        });
    }
    */

    definePageMeta({
        layout: 'products'
    })
</script>

<style scoped>

</style>