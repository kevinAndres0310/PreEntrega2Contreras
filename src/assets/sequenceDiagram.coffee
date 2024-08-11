sequenceDiagram
    participant User
    participant App
    participant FireStore
    participant LocalState
    participant Cart

    User->>App: Inicia la aplicación
    App->>FireStore: Solicita productos
    FireStore-->>App: Devuelve productos con stock
    App->>LocalState: Inicializa el estado local con productos y stock
    App->>Cart: Inicializa carrito vacío

   Note over App,Cart: El stock y carrito se manejan localmentelur

    User->>App: Busca productos
    App->>LocalState: Filtra productos
    LocalState-->>User: Muestra resultados filtrados

    User->>App: Selecciona producto
    App->>LocalState: Verifica stock local
    alt Stock disponible
        LocalState-->>App: Confirma disponibilidad
        User->>App: Agrega al carrito
        App->>LocalState: Reduce stock local
        App->>Cart: Agrega al carrito
        App-->>User: Muestra confirmación y actualiza vista del carrito
    else Sin stock
        App-->>User: Muestra error "Sin stock"
    end

    User->>App: Ajusta cantidad en el carrito
    alt Aumenta cantidad
        App->>LocalState: Verifica stock adicional
        alt Stock suficiente
            App->>LocalState: Reduce stock local
            App->>Cart: Actualiza cantidad
        else Stock insuficiente
            App-->>User: Muestra error "Stock insuficiente"
        end
    else Reduce cantidad
        App->>LocalState: Aumenta stock local
        App->>Cart: Actualiza cantidad
    end
    App-->>User: Actualiza vista del carrito

    User->>App: Quita producto del carrito
    App->>LocalState: Aumenta stock local
    App->>Cart: Quita del carrito
    App-->>User: Actualiza vista del carrito

    User->>App: Procede al checkout
    App->>Cart: Calcula total
    App-->>User: Muestra resumen de la orden

    User->>App: Confirma compra
    App->>FireStore: Verifica stock final
    alt Stock confirmado
        App->>FireStore: Actualiza stock en FireStore
        FireStore-->>App: Confirma actualización
        App->>LocalState: Actualiza stock local
        App->>Cart: Vacía el carrito
        App-->>User: Muestra confirmación de compra
    else Stock insuficiente
        App-->>User: Notifica cambios en disponibilidad
        App->>LocalState: Actualiza stock local
        App->>Cart: Ajusta carrito
        App-->>User: Solicita revisión del carrito
    end

    User->>App: Cierra sesión o aplicación
    App->>LocalState: Guarda estado local (opcional)
    App->>Cart: Guarda carrito (opcional)